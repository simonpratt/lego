export default {
  isActiveItem: (itemRoutes: RegExp[], activeRoute: string) => {
    for (let i = 0; i < itemRoutes.length; i++) {
      if (itemRoutes[i].test(activeRoute)) {
        return true;
      }
    }

    return false;
  },
};
