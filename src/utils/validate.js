export const checkValidData = (email, password) => {
  const isEMailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(
      password
    );

  if (!isEMailValid) return "Email Id is invalid";
  if (!isPasswordValid) return "Use a strong password";

  return null;
};
