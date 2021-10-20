require("dotenv").config();

const SUPABASE_URL = process.env.SUPABASE_URL;
const ANON_KEY = process.env.PUBLIC_ANON_KEY;
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DB_PORT = process.env.DB_PORT;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;

module.exports = {
  SUPABASE_URL,
  ANON_KEY,
  PORT,
  HOST,
  DATABASE_NAME,
  DB_PORT,
  USER,
  PASSWORD,
};
