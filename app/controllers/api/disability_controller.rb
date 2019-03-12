class Api::DisabilityController < ApplicationController
  def index
    p "Hello"
    render: {test: 'hello'}
  end

  def disability_params
      params.require(:current_age, :retirement_age, :current_savings, :savings_after_disability, :additional_annual_savings, :portfolio, :annual_expenses_start_year, :annual_expenses_end_year, :annual_expenses_amount)
  end
end