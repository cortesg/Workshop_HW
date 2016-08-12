class Calculator
	attr_accessor  :value1, :value2 

	def self.add(value1, value2)
		return value1 + value2
	end

	def self.subtract(value1, value2)
		return value1 - value2
	end

	def self.multiply(value1, value2)
		return value1 * value2
	end

	def self.divide(value1, value2)
		return value1 / value2
	end
end

puts Calculator.add(1,2)  #3
puts Calculator.subtract(1,2) #-1
puts Calculator.multiply(1,2) #2
puts Calculator.divide(2,2) #1


class Elevator
	attr_accessor :floor

	def self.on(floor)
		@floor = floor
		if floor > -1 
			puts @floor
		else
			puts "Please choose a floor on Earth."
		end
	end

	def self.choose(direction)
		@direction = direction
		if direction == "up" 
			puts @floor + 1
		elsif direction == "down"
			puts @floor - 1
		end
	end         #future project - go to floor __

	def self.greet(floor) 
		@floor = floor
  		puts "Welcome, welcome to the cheery floor #{@floor}! It's pretty cool." 
  	end

  	def self.music
  		exec 'afplay', 'jazz.mp3'
  	end

end

Elevator.on(-1)  #Earth
Elevator.choose('up')  #0
Elevator.greet(2) #welcome to floor 2
Elevator.choose('down') #1
Elevator.music #jazz

# # control C to exit program
# # ps aux | grep afplay



