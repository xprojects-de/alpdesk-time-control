export const environment = {
  production: true,
  // Empty on purpose: the production build is served by the same Micronaut jar it talks to
  // (see Backend/build.gradle's static-resource packaging), so requests should stay relative
  // to whatever host/port that jar is actually bound to instead of a hardcoded one.
  apiUrl: ''
};

