import bcrypt from 'bcrypt';

export const parseBearerToken = (headers) => new Promise((resolve, reject) => {
  if (headers.authorization) {
    resolve(headers.authorization.split(' ')[1]);
  } else {
    reject('No sessionToken found');
  }
});

export const checkPasswordExists = (user) => new Promise((resolve, reject) => {
  if (user.password) {
    resolve(user.password);
  } else {
    reject('Password has not been set.');
  }
});

export const comparePassword = (providedPassword, storedPassword) => {
  return bcrypt.compare(providedPassword, storedPassword);
};

export const generateRandomNum = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};
