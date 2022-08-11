import bcrypt from 'bcryptjs';
/**
 * It takes a password and a userPassword, and returns a promise that resolves to true if the password
 * matches the userPassword, and false if it doesn't
 * @param password - The password that the user is trying to login with.
 * @param userPassword - The password that is stored in the database
 * @returns The result of the comparison.
 */
export const validatePassword = async (password, userPassword) => {
  return await bcrypt.compare(password, userPassword);
};

export const comparePass = (a, b) => {
  if (a === b) {
    return true;
  }
  return false;
};
