class Api::V1::UsersController < ActionController::API

  def index
    @roles = User.all
    render json: @roles
  end

  def show
    @role = User.find(params[:id])
    render json: @role
  end

end
