def america(string)
	puts string + " Only in America!"
end 

america("Gino") # prints 'Gino Only in America!'

def findMax(array)
	mxm = array[0]
	for element in array
		if element > mxm
			mxm = element
		end
	end	
	return mxm
end  

puts findMax([3,4,43,4,3,4,34,3,2]) # prints 43

def combineArray(array1, array2)  
	hash = Hash.new
	for i in 0...array1.length
		hash[array1[i]]=array2[i]
	end
	puts hash
end

combineArray(["Toyota", "Honda"], ["Camry", "Civic"])  # prints '{"Toyota"=>"Camry", "Honda"=>"Civic"}'

# ZIP METHOD
# def combineArray(array1, array2)  
# 	Hash[array1.zip array2]	
# end

for n in 1..100
	if n % 3 == 0 && n % 5 == 0
		puts ("FizzBuzz")
	elsif n % 3 == 0
		puts ("Fizz")
	elsif n % 5 == 0
		puts ("Buzz")
	else
		puts n
	end
end


# for i in 0..4   
# 	puts "currently on the number #{i} iteration of this loop." 
# end
