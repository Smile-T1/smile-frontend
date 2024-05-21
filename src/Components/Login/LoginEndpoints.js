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

  if (response.status === 200) {
    const responseData = await response.json();
    return { status:'success', message: "Login Successful ", data: responseData };
  } else if (response.status === 400) {
    const errorData = await response.json();
    return { status:'error', message: "Invalid username or password ", error: errorData };
  } else if (response.status === 500) {
    const errorData = await response.json();
    return { status:'error', message: "Internal server error ", error: errorData };
  } 
  else {
    const errorData = await response.json();
    return { status:'error', message: "Unexpected Error ", error: errorData };
  }
};

export { loginUser };