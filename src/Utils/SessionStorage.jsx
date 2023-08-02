const setUser = (userData) => {
  let userObj = JSON.stringify(userData);
  localStorage.setItem("user", userObj);
};

const getUser = () => {
  let userData = localStorage.getItem("user");
  return JSON.parse(userData);
};

export { setUser, getUser };
