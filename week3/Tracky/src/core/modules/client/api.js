import { supabase } from "../../api/supabase";

export const getClients = async () => {
  return await supabase
    .from("clients")
    .select("*")
    .order("name")
    .throwOnError();
};

export const createClient = async (client) => {
  return await supabase
    .from("clients")
    .insert(client)
    .select()
    .throwOnError()
    .single();
};
