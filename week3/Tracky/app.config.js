import "dotenv/config";

module.exports = {
  name: "Tracky",
  version: "1.0.0",
  extra: {
    SUPABASE_URL: process.env.SUPABASE_URL,
    SUPABASE_KEY: process.env.SUPABASE_KEY,
  },
};
