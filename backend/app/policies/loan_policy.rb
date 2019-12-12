class LoanPolicy < ApplicationPolicy
  attr_reader :user, :loan
  class Scope < Scope
    def resolve
      if user&.admin?
        scope.all
      else
        scope.where("loaned_by_id": user.id)
      end
    end
  end

  def create?
    user && user&.admin? && user.uid == loan.lent_by_id
  end

  def update?
    user&.admin? && user.uid == loan.lent_by_id
  end

  def show?
    user && user&.admin? && user.uid == loan.lent_by_id
  end
    

  def delete?
    user&.admin? && user.uid == loan.lent_by_id
  end
end


