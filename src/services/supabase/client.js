// src/services/supabase/client.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabasePublishableKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

if (!supabaseUrl || !supabasePublishableKey) {
  if (import.meta.env.DEV) {
    throw new Error(
      'Faltan variables de entorno de Supabase. ' +
      'Asegúrate de que VITE_SUPABASE_URL y VITE_SUPABASE_PUBLISHABLE_KEY estén definidas en tu archivo .env'
    );
  } else {
    console.error('Error de configuración: Variables de Supabase no definidas');
  }
}

export const supabase = createClient(
  supabaseUrl,
  supabasePublishableKey
);