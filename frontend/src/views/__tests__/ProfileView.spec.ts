import { shallowFactory } from '@/helpers/testFactoryHelpers';
import { Wrapper } from '@vue/test-utils';
import ProfileView from '@/views/ProfileView.vue';
import UsersModule from '@/store/modules/UsersModule';
import { User } from '@/types';

describe('ProfileView.vue', () => {
  const baseUser: User = {
    role: 0, 
    uid: 0, 
    created_at: '', //eslint-disable-line camelcase
    email: '', 
    google_token: '', //eslint-disable-line camelcase
    klass: '', 
    name: '', 
    photo_path: '', //eslint-disable-line camelcase
    updated_at: '' //eslint-disable-line camelcase
  };

  it('Notifes you if you are not logged in', () => {
    const wrapper: Wrapper<ProfileView> = shallowFactory(ProfileView);
    UsersModule.setCurrentUser(baseUser);

    expect(wrapper.text()).toMatch('inte inloggad');
  });

  it('Displays the correct name/role/class', () => {
    const wrapper: Wrapper<ProfileView> = shallowFactory(ProfileView, { mocks: {
      $route: {
        params: {
          id: 1111
        }
      }
    }});

    baseUser.role = 1;
    baseUser.uid = 1111;
    baseUser.name = 'Test Jestsson';
    baseUser.klass = 'TE4';
    UsersModule.setUser(baseUser);
    console.log(wrapper.vm.$route.params.id);
    console.log(UsersModule.all[Number(wrapper.vm.$route.params.id)]);
  
    UsersModule.setCurrentUser(baseUser);

    expect(wrapper.text()).toMatch('Elev');
    expect(wrapper.text()).toMatch('Test Jestsson');
    expect(wrapper.text()).toMatch('TE4');
  });

});
