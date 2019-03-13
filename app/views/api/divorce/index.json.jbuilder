@divorces.each do|divorce|
  json.set! divorce.age do
    json.age = divorce.age
    json.portfolio_value_expected = divorce.portfolio_value_expected
    json.portfolio_value_ub = divorce.portfolio_value_ub
    json.portfolio_value_lb = divorce.portfolio_value_lb
    json.income_expected = divorce.income_expected
    json.income_ub = divorce.income_ub
    json.income_lb = divorce.income_lb
  end
end