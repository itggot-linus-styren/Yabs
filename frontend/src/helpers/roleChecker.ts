import UsersModule from '../store/modules/UsersModule';

export default class RoleChecker {
  
  static principal(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 32) == 32 || (UsersModule.currentUser.role > 32);
  }

  static admin(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 16) == 16 || (UsersModule.currentUser.role > 16);
  }

  static caretaker(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 8) == 8 || (UsersModule.currentUser.role > 8);
  }

  static teacher(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 4) == 4 || (UsersModule.currentUser.role > 4);
  }

  static studentHealth(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 2) == 2 || (UsersModule.currentUser.role > 2);
  }

  static student(): boolean {
    return UsersModule.currentUser && (UsersModule.currentUser.role & 1) == 1;
  }
}
