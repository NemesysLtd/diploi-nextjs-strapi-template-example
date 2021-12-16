const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("POSTGRES_HOST", "localhost"),
      port: env("POSTGRES_PORT", 5432),
      user: env("POSTGRES_USER", "strapi"),
      password: env("POSTGRES_PASSWORD", "strapi"),
      database: env("POSTGRES_HOST", "strapi"),
    },
    useNullAsDefault: true,
  },
});
