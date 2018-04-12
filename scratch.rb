# Increment Strings

def increment_string(input)
  # numbers = input.split(/[a-zA-Z]/)
  letters = input.gsub(/ *\d+$/, '')
  numbers = input[-(input.length - letters.length), (input.length - letters.length)]
  length = numbers.length
  num = numbers.to_i + 1
  letters + num.to_s.rjust(length, '0')
end

puts increment_string('f00bar01')
