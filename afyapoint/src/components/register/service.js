import axios from "../../axios";

export const create = async (
  firstName,
  lastName,
  email,
  phone,
  password,
  role
) => {
  try {
    let response = await axios.post("/users", {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: password,
      role: role,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};
