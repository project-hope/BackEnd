class Api::DisabilityController < ApplicationController
  def index
    current_age = params[:current_age]
    @disabilities = Disability.where({current_age: params[:current_age]})
    p @disabilities.length
    render :index
  end
end