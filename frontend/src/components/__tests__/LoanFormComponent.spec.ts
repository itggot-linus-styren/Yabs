import LoanFormComponent from '@/components/LoanFormComponent.vue';

import { Wrapper} from '@vue/test-utils';
import { factory } from '@/helpers/testFactoryHelpers';
import LoansModule from '@/store/modules/LoansModule';
import UsersModule from '@/store/modules/UsersModule';

jest.mock('@/store/modules/LoansModule', () => {
  return {
    create: jest.fn().mockImplementationOnce((_arg) => {
      return Promise.resolve();
    })
  };
});

describe('LoanFormComponent.vue', () => {
  
  it('calls loansmodule with correct values', () => {
    const wrapper: Wrapper<LoanFormComponent> = factory(LoanFormComponent);
    UsersModule.setCurrentUser({uid: 123});

    wrapper.find('[data-jest=\'student_barcode\']').setValue('123');
    wrapper.find('[data-jest=\'book_barcode\']').setValue('1234');
    wrapper.find('[data-jest=\'form\']').trigger('submit');
   

    expect(LoansModule.create).toHaveBeenCalledWith({
      loaned_by_id: '123',
      book_id: '1234',
      lent_by_id: 123,
      
    });
  });
});