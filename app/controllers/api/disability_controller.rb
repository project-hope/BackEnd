class Api::DisabilityController < ApplicationController
  
  def get_portfolio(index)
    @portfolio_mapping = [
      'MPU_ES010',
      'MPU_ES020',
      'MPU_ES030',
      'MPU_ES040',
      'MPU_ES050',
      'MPU_ES060',
      'MPU_ES070',
      'MPU_ES080',
      'MPU_ES090',
    ]
    return @portfolio_mapping[index]
  end

  def index
    @disabilities = Disability.where({
      current_age: params[:current_age], 
      retirement_age: params[:retirement_age],
      current_savings: params[:current_savings],
      savings_after_disability: params[:current_savings].to_i - params[:immediate_expenses].to_i,
      additional_annual_savings: params[:additional_annual_savings],
      annual_expenses_amount: params[:annual_expenses_amount],
      annual_expenses_start_year: params[:annual_expenses_start],
      annual_expenses_end_year: params[:annual_expenses_end],
      portfolio: get_portfolio(params[:portfolio].to_i - 1)
      })
    render :index
  end
end