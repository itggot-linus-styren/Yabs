import UsersModule from '../store/modules/UsersModule';
import { User } from '@/types';

interface Roles { [bitValue: number]: string}

export default class RoleChecker {
  static roles(): Roles {
    return {
      1: 'Elev',
      2: 'Elevhälsoteam',
      4: 'Lärare',
      8: 'Vaktmästare',
      16: 'Administratör',
      32: 'Rektor'
    };
  };

  private static checkPermission(user: User, required: number): boolean {
    return user && ((user.role & required) == required || (user.role > required));
  }
  
  static isPrincipal(user: User = UsersModule.currentUser): boolean {
    return this.checkPermission(user, 32);
  }

  static isAdmin(user: User = UsersModule.currentUser): boolean {
    return this.checkPermission(user, 16);
  }

  static isCaretaker(user: User = UsersModule.currentUser): boolean {
    return this.checkPermission(user, 8);
  }

  static isTeacher(user: User = UsersModule.currentUser): boolean {
    return this.checkPermission(user, 4);
  }

  static isStudentHealth(user: User = UsersModule.currentUser): boolean {
    return this.checkPermission(user, 2);
  }

  static isStudent(user: User = UsersModule.currentUser): boolean {
    return user && (user.role & 1) == 1;
  }

  static roleAsText(user: User = UsersModule.currentUser): string {
    if (!user) {return ''; }
    for(const bitValue of Object.keys(RoleChecker.roles()).reverse()) {
      if (user.role >= Number(bitValue)) {
        return RoleChecker.roles()[Number(bitValue)];
      }
    }
    return '';
  }
  
  /**
   * This function takes a user and
   * translates its rolevalue into an array of the 
   * assigned available roles
   * 
   * @param user An object containing a rolevalue
   * 
   * @returns {number[]} An array of all the rolevalues assigned to the user, largest first
   */
  static assignedRoles(user: User = UsersModule.currentUser): number[] {
    let roleTotal: number = user.role;
    return Object.keys(RoleChecker.roles()).reverse().reduce((acc, bitValue) => {
      if (user.role >= Number(bitValue) && roleTotal >= Number(bitValue)) { 
        acc.push(Number(bitValue));
        roleTotal -= Number(bitValue);
        return acc;
      } else { 
        return acc;
      }
    }, [] as number[]);
  }
}
