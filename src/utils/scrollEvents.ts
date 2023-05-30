export const scrollEvents = () => {
  let keys: any = { 37: 1, 38: 1, 39: 1, 40: 1 };

  function preventDefault(e: any) {
    e.preventDefault();
    return false;
  }

  function preventDefaultForScrollKeys(e: any) {
    if (keys[e.keyCode]) {
      preventDefault(e);
      return false;
    }
  }

  // modern Chrome requires { passive: false } when adding event
  let supportsPassive = true;

  let wheelOpt: any = supportsPassive ? { passive: false } : false;

  return {
    disableScroll: function () {
      window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
      window.addEventListener("wheel", preventDefault, wheelOpt); // modern desktop
      window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
      window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    },
    enableScroll: function () {
      window.removeEventListener("DOMMouseScroll", preventDefault, false);
      window.removeEventListener("wheel", preventDefault, wheelOpt);
      window.removeEventListener("touchmove", preventDefault, wheelOpt);
      window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    },
  };
};
