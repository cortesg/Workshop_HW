class Animal   
	attr_accessor :eyes
	attr_accessor :backbone
	attr_accessor :legs 
	attr_accessor :wings
	attr_accessor :gills
	def initialize(eyes = 2)
		self.eyes = eyes               #self calls on itself
	end
	def initialize(backbone = 1)
		self.backbone = backbone               #self calls on itself
	end
end

class Cat < Animal   
	def meow     
		puts "Cat says 'meoww'"   
	end 
end

class Bird < Animal   
	def caw     
		puts "Bird says 'caww'"   
	end 
end

class Fish < Animal   
	def blub    
		puts "Fish says 'blubb'"   
	end 
end

my_cat = Cat.new 
my_cat.legs = 4 
my_cat.meow 
puts "My cat has #{my_cat.legs} legs." #prints 4
# puts "These animals, including my cat, has #{my_cat.eyes} eyes." #prints 2 eyes
puts "#{my_cat.backbone} backbone for all!" #prints 1 backbone

my_bird = Bird.new   
my_bird.wings = 20
my_bird.caw
puts "My bird has #{my_bird.wings} wings." #prints 20
# puts "These animals, including my bird, has #{my_bird.eyes} eyes." #prints 2 eyes
puts "#{my_bird.backbone} backbone for all!" #prints 1 backbone

my_fish = Fish.new
my_fish.gills = 6
my_fish.blub 
puts "My fish has #{my_fish.gills} gills." #prints 6
# puts "These animals, including my fish, has #{my_fish.eyes} eyes." #prints 2 eyes
puts "#{my_fish.backbone} backbone for all!" #prints 1 backbone

#when i puts both eyes and backbone puts statements, only the backbone puts statements appears
#(that's why i have my eyes puts statements commented out)
#is it because i made 2 initialize methods in the Animal class?