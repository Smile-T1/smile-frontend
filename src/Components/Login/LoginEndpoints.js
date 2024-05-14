const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

const loginUser = async (username, password) => {
  const url = `${VITE_SERVER_HOST}/api/auth/login`;
  const data = {
    username,
    password,
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const responseData = await response.json();

  const id = responseData._id;
  const userUsername = responseData.username;
  const profilePic = responseData.profilePic;
  const userAccess = responseData.userAccess;
  //store token in local storage
  const token = responseData.token;
  localStorage.setItem("token", token);

  console.log("User ID:", id);
  console.log("Username:", userUsername);
  console.log("Profile Picture:", profilePic);
  console.log("User Access:", userAccess);

  return responseData;
};

export { loginUser };
