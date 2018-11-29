class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: [:show]

  def index
    render json: User.all
  end

  def show
    render json: @user
  end 

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # # Never trust parameters from the scary internet, only allow the white list through.
    def user_params
      params.require(:user).permit(:profile_image)
    end
end
