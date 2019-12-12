class UserPolicy < ApplicationPolicy
    attr_reader :user
    class Scope < Scope
      def resolve
        if user&.admin?
          scope.all
        else
          scope.where(uid: user&.uid)
        end
      end
    end
  
    def show?
      user&.admin? || record&.uid == user&.uid
    end

    def create?
      user && user.admin?
    end

    def update?
      user && user.admin?
    end

    def destroy?
      user && user.admin?
    end
  end