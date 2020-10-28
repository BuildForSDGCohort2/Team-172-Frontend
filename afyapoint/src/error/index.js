export const handleError = (err) => {
  const message = "Oops something went wrong. Please try again.";

  if (err.response) {
    if (err.response.data) {
      if (err.response.data.message) {
        return { message: err.response.data.message };
      } else {
        return { message };
      }
    } else {
      return { message };
    }
  } else {
    return { message };
  }
};

export const validationError = (err) => {
  if (err.response) {
    if (err.response.data) {
      if (err.response.data.errors) {
        return err.response.data.errors;
      } else {
        return {};
      }
    } else {
      return {};
    }
  } else {
    return {};
  }
};
