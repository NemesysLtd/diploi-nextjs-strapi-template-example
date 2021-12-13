module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c4a91b39002bf37fd00c5d51a13f11c6'),
  },
});
