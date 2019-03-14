@disabilities.each do|disability|

  json.age disability.age
  json.portfolio_value_expected disability.portfolio_value_expected
  json.portfolio_value_ub disability.portfolio_value_ub
  json.portfolio_value_lb disability.portfolio_value_lb
  json.income_expected disability.income_expected
  json.income_ub disability.income_ub
  json.income_lb disability.income_lb
end