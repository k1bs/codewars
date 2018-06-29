# Increment Strings

def increment_string(input)
  # numbers = input.split(/[a-zA-Z]/)
  letters = input.gsub(/ *\d+$/, '')
  numbers = input[-(input.length - letters.length), (input.length - letters.length)]
  length = numbers.length
  num = numbers.to_i + 1
  letters + num.to_s.rjust(length, '0')
end

# puts increment_string('f00bar01')

def race(vel1, vel2, lead)
  return [0, 0, 0] if lead.zero?
  return nil if vel1 >= vel2
  gap = vel2.to_f - vel1
  ratio = gap / lead.to_f
  hours = 1 / ratio
  minutes = hours.modulo(1) * 60
  seconds = minutes.modulo(1) * 60
  [hours.floor, minutes.floor, seconds.floor]
end

# puts race(81, 100, 40)

def sum_pairs(ints, s)
  ints.length.times do |iter|
    ints.map.with_index do |item, index|
      unless ints[index + iter + 1].nil?
        return [item, ints[index + iter + 1]] if (item + ints[index + iter + 1]) == s
      end
    end
  end
  nil
end

# puts sum_pairs([1, 2, 3, 4, 5], 5)

def binary_array_to_number(arr)
  arr.reverse!
  sum = 0
  arr.map.with_index do |item, index|
    if item == 1
      if index.zero?
        sum += 1 if item == 1
      else
        sum += (index * 2)
      end
    end
  end
  sum
end

def difference_of_squares(arg)
  array = Array.new(arg) { |i| i + 1 }
  sum = 0
  sum_of_squares = 0
  array.each do |elem|
    sum += elem
    sum_of_squares += (elem**2)
  end
  sum**2 - sum_of_squares
end

# puts difference_of_squares(10)

def is_sorted_and_how(arr)
  return 'yes, ascending' if arr == arr.sort
  return 'yes, descending' if arr == arr.sort { |x, y| y <=> x }
  'no'
end

puts is_sorted_and_how([1, 2, 3])
puts is_sorted_and_how([15, 6, -3])
puts is_sorted_and_how([3, 2, 30])