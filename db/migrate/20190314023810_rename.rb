class Rename < ActiveRecord::Migration[5.1]
    def self.up
    rename_column :disabilities, :annual_expenses_end_year, :annual_expenses_length
  end

  def self.down
    # rename back if you need or do something else or do nothing
  end
end
