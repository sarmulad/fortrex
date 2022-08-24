export const hideTopNav = () => {
  document.getElementById("mini-topnav").classList.add("!hidden");
  document.getElementById("mini-topnav").classList.remove("!block");
};

export const showTopNav = () => {
  document.getElementById("mini-topnav").classList.add("!block");
  document.getElementById("mini-topnav").classList.remove("!hidden");
};
