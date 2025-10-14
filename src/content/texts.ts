export type Texts = {
  app: { name: string };
  header: { menuLabel: string; nav: { home: string; about: string; contact: string } };
  home: { title: string; card: { title: string; text: string } };
  footer: { versionPrefix: string };
};

export const texts: Texts = {
  app: { name: "AC UI" },
  header: {
    menuLabel: "Menu",
    nav: { home: "Home", about: "About", contact: "Contact" },
  },
  home: {
    title: "Key Features",
    card: { title: "Title", text: "hola" },
  },
  footer: { versionPrefix: "v" },
};

export default texts;

