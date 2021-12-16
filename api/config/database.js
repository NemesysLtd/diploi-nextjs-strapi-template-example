const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST", "localhost"),
      port: env("POSTGRES_PORT", 5432),
      user: env("POSTGRES_USER", "postgres"),
      password: env("POSTGRES_HOST", ""),
      database: env("POSTGRES_HOST", "strapi"),
    },
    useNullAsDefault: true,
  },
});
