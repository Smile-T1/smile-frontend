const VITE_SERVER_HOST = import.meta.env.VITE_SERVER_HOST;

const loginUser = async (username, password) => {
    const url = `${VITE_SERVER_HOST}/api/auth/login`;
    const data = {
      username,
      password,
    };

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseData = await response.json();

    const id = responseData._id;
    const userUsername = responseData.username; // Renamed variable
    const profilePic = responseData.profilePic;

    console.log('User ID:', id);
    console.log('Username:', userUsername); // Updated variable name
    console.log('Profile Picture:', profilePic);

    return responseData;
  };

  export { loginUser };