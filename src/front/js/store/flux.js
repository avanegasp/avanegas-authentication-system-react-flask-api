const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      demo: [
        {
          title: "FIRST",
          background: "white",
          initial: "white",
        },
        {
          title: "SECOND",
          background: "white",
          initial: "white",
        },
      ],
    },
    actions: {
      // Use getActions to call a function within a fuction
      register: async (email, password) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/signup",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email, password }),
            }
          );
          if (!response.ok) {
            return false;
          }
          const data = response.json();
          return data;
        } catch (error) {
          console.log(error);
        }
      },
      login: async (email, password) => {
        try {
          const response = await fetch(
            process.env.BACKEND_URL + "/api/signin",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ email, password }),
            }
          );
          if (!response.ok) {
            return false;
          }
          const data = await response.json();
          localStorage.setItem("token", JSON.stringify({ token: data.token }));
          setStore({ token: data.token });
          //   return true;
          //   console.log("esto es data", data);
          return data;
        } catch (error) {
          console.log(error);
        }
      },
    },
  };
};

export default getState;
