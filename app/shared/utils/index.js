import bcrypt from 'bcrypt';

export const userLevel = 1;
export const companyAdminLevel = 2;
export const superAdminLevel = 3;

export const parseBearerToken = (headers) => new Promise((resolve, reject) => {
  if (headers.authorization) {
    resolve(headers.authorization.split(' ')[1]);
  } else {
    reject('No sessionToken found');
  }
});

export const checkUserIsInCompany = (userId, employees) => new Promise((resolve, reject) => {
  const index = employees.indexOf(userId);
  if (index !== -1) {
    resolve(userId);
  } else {
    reject('Unauthorized');
  }
});

export const ensureObjectExists = (obj, msg) => new Promise((resolve, reject) => {
  if (obj) {
    resolve(obj);
  } else {
    reject(msg || 'Expected object to exist');
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

export const ensureIsAdmin = (user) => new Promise((resolve, reject) => {
  if (user.accessLevel > 1) {
    resolve(user);
  } else {
    reject('No admin access.');
  }
});

export const confirmIsSuperAdmin = (accessLevel) => new Promise((resolve, reject) => {
  if (accessLevel === superAdminLevel) {
    resolve(true);
  } else {
    reject('Not enough access privileges.');
  }
});

export const generateRandomNum = () => {
  return Math.floor(Math.random() * 90000) + 10000;
};
