import { supabase } from "../../api/supabase";

export const getProjects = async () => {
  return await supabase
    .from("projects")
    .select("*")
    .order("name")
    .throwOnError();
};
