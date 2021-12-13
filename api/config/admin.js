module.exports = ({ env }) => ({
  auth: {
    secret: env("STRAPI_ADMIN_JWT_SECRET", "c4a91b39002bf37fd00c5d51a13f11c6"),
  },
});
