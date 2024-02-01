interface setCurrentUser {
  email: string;
  username: string;
  password: string;
  type: string;
  wallet: string;
}

export const setCurrentUser = async (props: setCurrentUser) => {
  localStorage.setItem("currentUser", JSON.stringify(props));
  console.log("current user set");

  return true;
};

export const getCurrentUser = async () => {
  let val: any = JSON.parse(localStorage.getItem("currentUser")!);

  return val;
};
