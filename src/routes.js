let view = (name, namespace = null) => {
  namespace = (namespace) ? namespace + '/' : '';
  return () => System.import(`./${namespace}${name}/${name}.vue`);
};

export default [
  { path: "/", component: view('Start') },
  { path: "/auth", component: view('Auth'), name: "auth" },
  { path: "/map/photo", component: () => System.import('./Map/Photo.vue'), name: "map.photo" },
  { path: "/map/:type", component: view('Map'), name: "map", props: true },
  { path: "/settings", component: view('Settings'), name: "settings" },
  { path: "/help", component: view('Help'), name: "help" },
  { path: "/flight", component: view('Flight'), name: "flight" },
  { path: "/entertainment/music", component: () => System.import('./Entertainment/Music.vue'), name: "music" },
  { path: "/entertainment/films", component: () => System.import('./Entertainment/Films.vue'), name: "films" },
  { path: "/entertainment/news", component: () => System.import('./Entertainment/News.vue'), name: "news" },
  { path: "/entertainment/games", component: () => System.import('./Entertainment/Games.vue'), name: "games" },
];