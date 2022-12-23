import { supabase } from "../../api/supabase";

export const getLogs = async () => {
  return await supabase.from("logs").select("*").order("name").throwOnError();
};

export const getLogsByDate = async (date) => {
  return await supabase
    .from("logs")
    .select("*, project:projects(*, client:clients(name))")
    .eq("date", date)
    .throwOnError();
};

export const getLogById = async (id) => {
  return await supabase
    .from("logs")
    .select("*")
    .eq("id", id)
    .single()
    .throwOnError();
};

export const createLog = async (log) => {
  return await supabase
    .from("logs")
    .insert(log)
    .select()
    .throwOnError()
    .single();
};

export const updateLog = async (log) => {
  return await supabase
    .from("logs")
    .update(log)
    .eq("id", log.id)
    .throwOnError();
};

export const deleteLog = async (uid) => {
  return await supabase.from("logs").delete().eq("id", uid).throwOnError();
};
