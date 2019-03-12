# == Schema Information
#
# Table name: disabilities
#
#  id                         :bigint(8)        not null, primary key
#  current_age                :integer
#  retirement_age             :integer
#  current_savings            :integer
#  savings_after_disability   :integer
#  additional_annual_savings  :integer
#  portfolio                  :string
#  annual_expenses_start_year :integer
#  annual_expenses_end_year   :integer
#  annual_expenses_amount     :integer
#  age                        :integer
#  portfolio_value_expected   :float
#  portfolio_value_ub         :float
#  portfolio_value_lb         :float
#  income_expected            :float
#  income_ub                  :float
#  income_lb                  :float
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#

class Disability < ApplicationRecord
end
