export const db_url: string =
  process.env.DB_URL ||
  "postgresql://postgres:postgres@localhost:5432/postgres";

export const db_config = {
  url: db_url,
  options: {
    logging: (sql: string) => {
      console.log(sql);
    },
  },
};

if (db_url)
  console.log("db.config.ts: Connecting to postgres via DB_URL: ", db_url);
else {
  console.log(
    "db.config.ts: Connecting to postgres via variables from .env file"
  );
  console.log("DB_NAME:", process.env.DB_NAME);
  console.log("DB_USER:", process.env.DB_USER);
  console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
  console.log("DB_URL:", process.env.DB_URL);
}
