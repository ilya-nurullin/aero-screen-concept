let view = (name, namespace = null) => {
  namespace = (namespace) ? namespace + '/' : '';
  return () => System.import(`./${namespace}${name}/${name}.vue`);
};

export default [
  { path: "/", component: {} }
];