import { supabase } from "../../api/supabase";

export const getPublicUrl = (bucket, filename) => {
  const { data, error } = supabase.storage.from(bucket).getPublicUrl(filename);

  if (error) {
    return null;
  }

  return data.publicUrl;
};
