import UsersModule from '../store/modules/UsersModule';
import { User } from '@/types';

interface Roles { [bitValue: number]: string}

const roles: Roles = {
  1: 'Elev',
  2: 'Elevhälsoteam',
  4: 'Lärare',
  8: 'Vaktmästare',
  16: 'Administratör',
  32: 'Rektor'
};

export default class RoleChecker {

  private static checkPermission(required: number): boolean {
    const user: User = UsersModule.currentUser;
    return user && ((user.role & required) == required || (user.role > required));
  }
  
  static isPrincipal(): boolean {
    return this.checkPermission(32);
  }

  static isAdmin(): boolean {
    return this.checkPermission(16);
  }

  static isCaretaker(): boolean {
    return this.checkPermission(8);
  }

  static isTeacher(): boolean {
    return this.checkPermission(4);
  }

  static isStudentHealth(): boolean {
    return this.checkPermission(2);
  }

  static isStudent(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 1) == 1;
  }

  static roleAsText(user: User = UsersModule.currentUser): string {
    if (!user) {return ''; }
    for(const bitValue of Object.keys(roles).reverse()) {
      if (user.role >= Number(bitValue)) {
        return roles[Number(bitValue)];
      }
    }
    return '';
  }
}
