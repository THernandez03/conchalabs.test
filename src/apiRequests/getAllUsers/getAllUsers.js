export const getAllUsers = async () => {
  const request = await fetch('/api/v1/users');
  return request.json();
};
