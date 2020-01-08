class Api::V1::ReviewsController < ApplicationController
  before_action :set_review, only: [:show, :update, :destroy]

  def index 
    render json: Review.all
  end

  def show
    render json: @review
  end

  def create
    @review = Review.new(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end
  
  def update
    if @review.update(review_params)
      render json: @review
    else
      render json: @review.errors, status: :unprocessable_entity
    end
  end
  
  def destroy
    @review.destroy
  end

  private 
    # Use callbacks to share common setup or constraints between actions.
    def set_review
      @review = Review.find(params[:id])
    end
    
    # Never trust parameters from the scary internet, only allow the white list through.
    def review_params
      params.require(:review).permit(:title_id, :user_id, :score, :review)
    end
end
