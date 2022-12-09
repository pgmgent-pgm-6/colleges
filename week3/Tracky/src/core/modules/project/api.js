import { supabase } from "../../api/supabase";

export const getProjects = async () => {
  return await supabase
    .from("projects")
    .select("*")
    .order("name")
    .throwOnError();
};

export const createProject = async (project) => {
  return await supabase
    .from("projects")
    .insert(project)
    .select()
    .throwOnError()
    .single();
};
