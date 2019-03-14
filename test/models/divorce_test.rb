# == Schema Information
#
# Table name: divorces
#
#  id                        :bigint(8)        not null, primary key
#  current_age               :integer
#  retirement_age            :integer
#  earnings_level            :string
#  current_savings           :integer
#  savings_after_divorce     :integer
#  additional_annual_savings :integer
#  portfolio                 :string
#  age                       :integer
#  portfolio_value_expected  :float
#  portfolio_value_ub        :float
#  portfolio_value_lb        :float
#  income_expected           :float
#  income_ub                 :float
#  income_lb                 :float
#  created_at                :datetime
#  updated_at                :datetime
#

require 'test_helper'

class DivorceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
