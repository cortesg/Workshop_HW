def factorial(n)
	(1..n).inject(1, :*) 
end

puts factorial(5)  #120

def rotate(array, n)
	(array.unshift(array.pop(n))).flatten!
end

puts rotate([1,2,3], 2)  # [2, 3, 1]

def rotateBack(array, n)
	(array.push(array.shift(n))).flatten!
end

# puts rotateBack([1,2,3], 2) # [3, 2, 1]

#ROTATE ONE STEP
def rotateX(array)
	array.unshift(array.pop)
end

#EXTRA CREDIT BACKWARDS ROTATE ONE STEP
def rotateBackX(array)
	array.push(array.shift)
end














# push() adds at end; pop() deletes from end.

# unshift() adds to front; shift() deletes from front.

# splice() can do whatever it wants, wherever it wants.


