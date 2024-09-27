import { RootState } from 'app/providers/store';
import {
  getUsername,
  getPassword,
  getIsLoading,
  getError,
} from 'features/auth-by-username/model/selectors';

describe('features.auth-by-username.model.selectors', () => {
  describe('getUsername', () => {
    test('should correctly return username', () => {
      const testUsername = 'qwerty';
      const testState = {
        signIn: { username: testUsername },
      } as RootState;

      expect(getUsername(testState)).toBe(testUsername);
    });
  });

  describe('getPassword', () => {
    test('should correctly return password', () => {
      const testPassword = '123456789';
      const testState = {
        signIn: { password: testPassword },
      } as RootState;

      expect(getPassword(testState)).toBe(testPassword);
    });
  });

  describe('getIsLoading', () => {
    test('should correctly return password', () => {
      const testIsLoading = true;
      const testState = {
        signIn: { isLoading: testIsLoading },
      } as RootState;

      expect(getIsLoading(testState)).toBe(testIsLoading);
    });
  });

  describe('getError', () => {
    test('should correctly return password', () => {
      const testError = 'error';
      const testState = {
        signIn: { error: testError },
      } as RootState;

      expect(getError(testState)).toBe(testError);
    });
  });
});
