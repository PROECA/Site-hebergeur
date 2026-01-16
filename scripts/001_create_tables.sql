-- Tables pour l'espace client Nexa-Host

-- Table des profils utilisateurs
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT NOT NULL,
  first_name TEXT,
  last_name TEXT,
  pterodactyl_user_id INTEGER,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "profiles_select_own" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Table des commandes
CREATE TABLE IF NOT EXISTS public.orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  paypal_order_id TEXT,
  game TEXT NOT NULL,
  plan TEXT NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  ram TEXT,
  cpu TEXT,
  disk TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

CREATE POLICY "orders_select_own" ON public.orders FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "orders_insert_own" ON public.orders FOR INSERT WITH CHECK (auth.uid() = user_id);

-- Table des serveurs
CREATE TABLE IF NOT EXISTS public.servers (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  order_id UUID REFERENCES public.orders(id) ON DELETE SET NULL,
  pterodactyl_server_id INTEGER,
  name TEXT NOT NULL,
  game TEXT NOT NULL,
  plan TEXT NOT NULL,
  ram TEXT,
  cpu TEXT,
  disk TEXT,
  status TEXT DEFAULT 'creating',
  ip_address TEXT,
  port INTEGER,
  panel_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  expires_at TIMESTAMP WITH TIME ZONE
);

ALTER TABLE public.servers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "servers_select_own" ON public.servers FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "servers_insert_own" ON public.servers FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "servers_update_own" ON public.servers FOR UPDATE USING (auth.uid() = user_id);

-- Table des tickets de support
CREATE TABLE IF NOT EXISTS public.tickets (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  subject TEXT NOT NULL,
  status TEXT DEFAULT 'open',
  priority TEXT DEFAULT 'normal',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.tickets ENABLE ROW LEVEL SECURITY;

CREATE POLICY "tickets_select_own" ON public.tickets FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "tickets_insert_own" ON public.tickets FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "tickets_update_own" ON public.tickets FOR UPDATE USING (auth.uid() = user_id);

-- Table des messages de tickets
CREATE TABLE IF NOT EXISTS public.ticket_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  ticket_id UUID NOT NULL REFERENCES public.tickets(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  message TEXT NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

ALTER TABLE public.ticket_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "ticket_messages_select" ON public.ticket_messages FOR SELECT 
  USING (EXISTS (SELECT 1 FROM public.tickets WHERE tickets.id = ticket_messages.ticket_id AND tickets.user_id = auth.uid()));
CREATE POLICY "ticket_messages_insert" ON public.ticket_messages FOR INSERT 
  WITH CHECK (EXISTS (SELECT 1 FROM public.tickets WHERE tickets.id = ticket_messages.ticket_id AND tickets.user_id = auth.uid()));

-- Trigger pour créer un profil automatiquement
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, first_name, last_name)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data ->> 'first_name', NULL),
    COALESCE(new.raw_user_meta_data ->> 'last_name', NULL)
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();
