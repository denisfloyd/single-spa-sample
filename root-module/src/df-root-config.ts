import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@df/home-module",
  app: () =>
    System.import('@df/home-module'),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@df/navbar",
//   app: () => System.import("@df/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
