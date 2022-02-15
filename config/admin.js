module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3ea4d98624e85d5aad3625345741d736'),
  },
});
