import UsersModule from '../store/modules/UsersModule';

export default class RoleChecker {
  
  static isPrincipal(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 32) == 32 || (UsersModule.currentUser.role > 32);
  }

  static isAdmin(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 16) == 16 || (UsersModule.currentUser.role > 16);
  }

  static isCaretaker(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 8) == 8 || (UsersModule.currentUser.role > 8);
  }

  static isTeacher(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 4) == 4 || (UsersModule.currentUser.role > 4);
  }

  static isStudentHealth(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 2) == 2 || (UsersModule.currentUser.role > 2);
  }

  static isStudent(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 1) == 1;
  }
}
