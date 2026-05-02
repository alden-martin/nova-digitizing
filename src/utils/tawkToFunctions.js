export const tawkToChat = () => {
  if (window.Tawk_API) {
    window.Tawk_API.maximize();
  } else {
    alert("Tawk To not initiated");
  }
};
