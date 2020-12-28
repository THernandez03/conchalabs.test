export const User = {
  async create({ user }) {
    const { uid, email, displayName } = user || {};
    const request = await fetch('/api/v1/users', {
      method: 'POST',
      body: JSON.stringify({
        /* eslint-disable camelcase */
        firebase_uid: uid,
        email,
        name: displayName,
      }),
    });

    return request.json();
  },
  async getAll() {
    const request = await fetch('/api/v1/users');
    return request.json();
  },
};
