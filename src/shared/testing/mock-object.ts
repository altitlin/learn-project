const idObj = new Proxy(
  {},
  {
    get: function getter(target, key) {
      if (key === '__esModule') {
        return false;
      }

      return key;
    },
  },
);

export default idObj;
