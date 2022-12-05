import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

const supabaseUrl = "https://tbpfinriwsanlndsbkyj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRicGZpbnJpd3NhbmxuZHNia3lqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzAyMjc4NjMsImV4cCI6MTk4NTgwMzg2M30.5TeG6sG5_gVf-AyKr_EIjp97vHYTf0ppopO1_hu7EMY";

export const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    storage: AsyncStorage,
    detectSessionInUrl: false, // Prevents Supabase from evaluating window.location.href, breaking mobile,
    autoRefreshToken: true,
    persistSession: true,
  },
});

export const createAccount = async () => {
  const { data, error } = await supabase.auth.signUp({
    email: "michael.vanderpoorten@arteveldehs.be",
    password: "testtest",
  });
  console.log(error);
};

export const AuthEvent = {
  SIGNED_IN: "SIGNED_IN",
  USER_UPDATED: "USER_UPDATED",
  TOKEN_REFRESHED: "TOKEN_REFRESHED",
  SIGNED_OUT: "SIGNED_OUT",
  USER_DELETED: "USER_DELETED",
};
