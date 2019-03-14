# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


require 'csv'

csv_text_dis = File.read(Rails.root.join('lib', 'seeds', 'disabilityv2.csv'))
csv_dis = CSV.parse(csv_text_dis, :headers => true, :encoding => 'ISO-8859-1')
csv_dis.each do |row|
  new_row = row.to_hash
  new_row.delete(new_row.keys.first)
  disability = Disability.create!(new_row)
end

csv_text_div = File.read(Rails.root.join('lib', 'seeds', 'divorcev2.csv'))
csv_div = CSV.parse(csv_text_div, :headers => true, :encoding => 'ISO-8859-1')
csv_div.each do |row|
  new_row = row.to_hash
  new_row.delete(new_row.keys.first)
  disability = Divorce.create!(new_row)
end