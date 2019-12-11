import HeaderNav from '../HeaderNav.vue';

import { Wrapper } from '@vue/test-utils';
import { shallowFactory } from '@/helpers/testFactoryHelpers';
import UsersModule from '@/store/modules/UsersModule';

describe('HeaderNav.vue', () => {

  const injectRouterStubs = {stubs: ['router-link', 'router-view']};

  it('renders title when passed', () => {
    const wrapper: Wrapper<HeaderNav> = shallowFactory(HeaderNav, injectRouterStubs);

    expect(wrapper.html()).toMatch('Yabs');
  });


  it('renders correctly', () => {
    const wrapper: Wrapper<HeaderNav> = shallowFactory(HeaderNav, injectRouterStubs);

    expect(wrapper.html()).toMatchSnapshot();
  });
});
