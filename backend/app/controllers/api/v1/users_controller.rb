class Api::V1::UsersController < ApplicationController
    def index
        @users = User.all
        render json: {users: @users}
    end

    def show
        @user = User.find(params[:id])
        render json: {user: @user}
    end

    def update
        @user = User.update(profile_image)
    end
end
