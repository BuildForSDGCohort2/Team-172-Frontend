import axios from "../../axios";

export const login = async (identifier, password) => {
  try {
    let response = await axios.post("/users/login", {
      identifier: identifier,
      password: password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
