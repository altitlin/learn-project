import { RootState } from 'app/providers/store';
import { getAuthData } from 'entities/user/model/selectors';

describe('entities.user.model.selectors', () => {
  describe('getAuthData', () => {
    test('should return authData', () => {
      const testAuthData = {
        id: '1',
        username: 'qwerty',
      };
      const testState = {
        user: {
          authData: testAuthData
        },
      } as RootState;

      expect(getAuthData(testState)).toEqual(testAuthData);
    });

    test('should return undefined when there is no authData', () => {
      const testState = {
        user: {
          authData: undefined
        },
      } as RootState;

      expect(getAuthData(testState)).toBeUndefined();
    });
  });
});
