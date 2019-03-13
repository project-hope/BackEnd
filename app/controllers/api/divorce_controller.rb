class Api::DivorceController < ApplicationController
    def index
    current_age = params[:current_age]
    @divorces = Divorce.where({current_age: params[:current_age]})
    p @divorces.length
    render :index
  end
end
