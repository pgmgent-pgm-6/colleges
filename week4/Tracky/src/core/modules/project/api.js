import { supabase } from "../../api/supabase";

export const getProjects = async () => {
  return await supabase
    .from("projects")
    .select("*")
    .order("name")
    .throwOnError();
};

export const getProjectById = async (id) => {
  return await supabase
    .from("projects")
    .select("*, client:clients(*)")
    .eq("id", id)
    .single()
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

export const updateProject = async (project) => {
  return await supabase
    .from("projects")
    .update(project)
    .eq("id", project.id)
    .throwOnError();
};
