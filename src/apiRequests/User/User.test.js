import { beforeEach, expect } from '@jest/globals';
import { User } from './User';

global.fetch = jest.fn(() => Promise.resolve({ json: () => {} }));

describe('apiRequests/User', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  describe('User should have "create" method', () => {
    it('"create" method should be defined', () => {
      expect(User.create).toBeDefined();
    });

    it('POST - "/api/v1/users"', async () => {
      await User.create();

      const [firstFetch] = fetch.mock.calls;
      const [path, options] = firstFetch;

      expect(path).toBe('/api/v1/users');
      expect(options.method).toBe('POST');
    });
  });

  describe('User should have "getAll" method', () => {
    it('"getAll" method should be defined', () => {
      expect(User.getAll).toBeDefined();
    });

    it('should hit "/api/v1/users" path', async () => {
      await User.getAll();
      expect(fetch).toHaveBeenCalledWith('/api/v1/users');
    });
  });
});
