# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20190312232351) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "disabilities", force: :cascade do |t|
    t.integer "current_age"
    t.integer "retirement_age"
    t.integer "current_savings"
    t.integer "savings_after_disability"
    t.integer "additional_annual_savings"
    t.string "portfolio"
    t.integer "annual_expenses_start_year"
    t.integer "annual_expenses_end_year"
    t.integer "annual_expenses_amount"
    t.integer "age"
    t.float "portfolio_value_expected"
    t.float "portfolio_value_ub"
    t.float "portfolio_value_lb"
    t.float "income_expected"
    t.float "income_ub"
    t.float "income_lb"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "divorces", force: :cascade do |t|
    t.integer "current_age"
    t.integer "retirement_age"
    t.string "earnings_level"
    t.integer "current_savings"
    t.integer "savings_after_divorce"
    t.integer "additional_annual_savings"
    t.string "portfolio"
    t.integer "age"
    t.float "portfolio_value_expected"
    t.float "portfolio_value_ub"
    t.float "portfolio_value_lb"
    t.float "income_expected"
    t.float "income_ub"
    t.float "income_lb"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
