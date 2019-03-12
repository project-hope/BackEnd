class CreateDisabilities < ActiveRecord::Migration[5.1]
  def change
    create_table :disabilities do |t|
      t.integer :current_age
      t.integer :retirement_age
      t.integer :current_savings
      t.integer :savings_after_disability
      t.integer :additional_annual_savings
      t.string :portfolio
      t.integer :annual_expenses_start_year
      t.integer :annual_expenses_end_year
      t.integer :annual_expenses_amount
      t.integer :age
      t.float :portfolio_value_expected
      t.float :portfolio_value_ub
      t.float :portfolio_value_lb
      t.float :income_expected
      t.float :income_ub
      t.float :income_lb
      t.timestamps
    end
  end
end
