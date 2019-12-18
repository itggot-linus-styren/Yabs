import UsersModule from '@/store/modules/UsersModule';
import RoleChecker from '../RoleChecker';

describe('RoleChecker.ts', () => {
  it('translate roles correctly', () => {
    const baseUser = {
      role: 1, 
      uid: 1111, 
      created_at: '', //eslint-disable-line camelcase
      email: '', 
      google_token: '', //eslint-disable-line camelcase
      klass: '', 
      name: '', 
      photo_path: '', //eslint-disable-line camelcase
      updated_at: '' //eslint-disable-line camelcase
    }; 
    UsersModule.setUser(baseUser);
    UsersModule.setCurrentUser(baseUser);
    expect(RoleChecker.roleAsText()).toBe('Elev');

    baseUser.role = 32;
    UsersModule.setUser(baseUser);
    expect(RoleChecker.roleAsText()).toBe('Rektor');

    baseUser.role = 36;
    UsersModule.setUser(baseUser);
    expect(RoleChecker.roleAsText()).toBe('Rektor');

    baseUser.role = 4;
    UsersModule.setUser(baseUser);
    expect(RoleChecker.roleAsText()).toBe('Lärare');

    baseUser.role = 2;
    UsersModule.setUser(baseUser);
    expect(RoleChecker.roleAsText()).toBe('Elevhälsoteam');
  });
});
