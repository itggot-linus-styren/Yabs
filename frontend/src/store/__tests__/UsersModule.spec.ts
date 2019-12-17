import UsersModule from '../modules/UsersModule';

describe('UsersModule.ts', () => {
  it('translate roles correctly', () => {
    UsersModule.setUser({role: 1, uid: '1111'});
    UsersModule.setCurrentUser({uid: 1111});

    expect(UsersModule.roleAsText).toBe('Elev');

    UsersModule.setUser({role: 32, uid: '1111'});

    expect(UsersModule.roleAsText).toBe('Rektor');

    UsersModule.setUser({role: 36, uid: '1111'});

    expect(UsersModule.roleAsText).toBe('Rektor');

    UsersModule.setUser({role: 6, uid: '1111'});

    expect(UsersModule.roleAsText).toBe('Lärare');

    UsersModule.setUser({role: 2, uid: '1111'});

    expect(UsersModule.roleAsText).toBe('Elevhälsoteam');
  });
});
