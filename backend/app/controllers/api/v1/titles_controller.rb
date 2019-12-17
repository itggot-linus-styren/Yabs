# THIS CONTROLLER IS NOT BEING AUTHORISED WITH PUNDIT

class Api::V1::TitlesController < ApplicationController
  before_action :set_title, only: [:show, :update, :destroy]

  # This is the index method toe render a JSON object with all titles 
  # which shows all titles available.
  # This specific controller is not being authorized

  def index
    render json: Title.all
  end

  # This is the show method and also generates the Json object of instance of the class
  # title

  def show
    render json: @title
  end

  # Create method which instantiates the title class with the right parameters,
  # saves it to the db and then renders all json object of the instance title

  def create
    @title = Title.new(title_params)

    if @title.save
      render json: @title
    else
      render json: @title.errors, status: :unprocessable_entity
    end
  end

  # Update method for the titles and updates with specific params then renders json object
  # of the updated instance of class title

  def update
    if @title.update(title_params)
      render json: @title
    else
      render json: @title.errors, status: :unprocessable_entity
    end
  end

  # Destroy, destroys the single target instance and then renders the 
  # rest instances of title

  def destroy
    @title.destroy
    render json: @title
  end

  # Set title method, find the current title and sets the title to that instance in order
  # to execute given method on correct title

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title
      @title = Title.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def title_params
      params.require(:title).permit(:name, :isbn, :cost, :title_type)
    end
end
