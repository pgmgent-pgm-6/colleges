import { supabase } from "../../api/supabase";

export const getClients = async () => {
  return await supabase
    .from("clients")
    .select("*")
    .order("name")
    .throwOnError();
};

export const getClientById = async (id) => {
  return await supabase
    .from("clients")
    .select("*, projects(*)")
    .eq("id", id)
    .single()
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

export const updateClient = async (client) => {
  return await supabase
    .from("clients")
    .update(client)
    .eq("id", client.id)
    .throwOnError();
};
