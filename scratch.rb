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

puts sum_pairs([1, 2, 3, 4, 5], 5)
