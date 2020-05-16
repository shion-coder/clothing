const { STRIPE_PUBLISHABLE_KEY, STRIPE_SECRET_KEY } = process.env;

module.exports = {
  stripePublishableKey: STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: STRIPE_SECRET_KEY,
};
