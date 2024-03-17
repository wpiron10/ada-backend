export default {
  config: {
    locales: ["fr"],
    translations: {
      fr: {
        "app.components.HomePage.welcome": "Bienvenue à bord !",
        "app.components.HomePage.welcome.again": "Bienvenue ",
      },
    },
  },
  bootstrap(app: any) {
    console.log(app);
  },
};
