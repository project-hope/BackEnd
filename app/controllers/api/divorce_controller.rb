class Api::DivorceController < ApplicationController

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
    current_age = params[:current_age]
    @divorces = Divorce.where({
      current_age: params[:current_age],
      retirement_age: params[:retirement_age],
      earnings_level: params[:earnings_level],
      current_savings: params[:current_savings],
      savings_after_divorce: params[:savings_after_divorce],
      additional_annual_savings: params[:additional_annual_savings],
      portfolio: get_portfolio(params[:portfolio].to_i - 1)
      })
    render :index
  end
end
