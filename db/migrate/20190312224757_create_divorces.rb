class CreateDivorces < ActiveRecord::Migration[5.1]
  def change
    create_table :divorces do |t|
      t.integer :current_age
      t.integer :retirement_age
      t.string :earnings_level
      t.integer :current_savings
      t.integer :savings_after_divorce
      t.integer :additional_annual_savings
      t.string :portfolio
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
