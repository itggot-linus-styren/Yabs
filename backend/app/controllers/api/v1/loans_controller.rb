class LoansController < ApplicationController
  before_action :set_loan, only: [:show, :update, :destroy]

  # GET /loans
  # GET /loans.json
  def index
    @loans = Loan.all
  end

  # GET /loans/1
  # GET /loans/1.json
  def show
  end

  # POST /loans
  # POST /loans.json
  def create
    @loan = Loan.new(loan_params)

    if @loan.save
      render :show, status: :created, location: @loan
    else
      render json: @loan.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /loans/1
  # PATCH/PUT /loans/1.json
  def update
    if @loan.update(loan_params)
      render :show, status: :ok, location: @loan
    else
      render json: @loan.errors, status: :unprocessable_entity
    end
  end

  # DELETE /loans/1
  # DELETE /loans/1.json
  def destroy
    @loan.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_loan
      @loan = Loan.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def loan_params
      params.require(:loan).permit(:loaned_by_id, :lent_by_id, :book_id, :return_at)
    end
end
