#all basic requirements and the first 2 additional requirements working and extra mute function.

class TV
	attr_accessor :switch
	attr_accessor :volume
	attr_accessor :channel
	attr_accessor :directionV
	attr_accessor :directionC

	def self.power(switch)
		@switch = switch
		if switch == "on"
			puts "TV is on."
		elsif switch == "off"
			puts "TV is off."
		end
		self
	end

	def self.volume(volume)
		@volume = volume
		if volume > 32 || volume < 1
			puts "not a valid volume level"
		else
			puts "The volume is #{@volume}."
		end
		self
	end      

	def self.mute(mute)
		@volume = @volume
		@mute = @mute
		if mute == "mute"
			puts "The volume is muted. To restore volume, type 'unmute'."
		elsif mute == "unmute"
			puts "The volume is back to #{@volume}."
			puts "To silence volume, type 'mute'."
		end
		self
	end     

	def self.show(channel) 
		@channel = channel
		if channel > 100 || channel < 1
			puts "not a valid channel"
		else
  			puts "The channel is #{@channel}."
		end
		self
  	end

	def self.dirC(directionC)
		@directionC = directionC
		@channel = @channel
		if directionC == "up" 
			@channel = @channel + 1
			puts "The channel is now #{@channel}."
		elsif directionC == "down"
			@channel = @channel - 1
			puts "The channel is now #{@channel}."
		end
		self
	end     

	def self.dirV(directionV)
		@directionV = directionV
		if directionV == "up" 
			@volume = @volume + 1
			puts "The volume is now #{@volume}."
		elsif directionV == "down"
			@volume = @volume - 1
			puts "The volume is now #{@volume}."
		end
		self
	end   

	def self.displayC()
		@channel = @channel
		puts "You are currently on channel #{@channel}."
		self
	end

	# def self.displayV()
	# 	@volume = @volume
	# 	puts "You are currently on volume #{@volume}."
	# end

end

TV.power('on')  #on
TV.show(2) #The channel is 2.
TV.dirC('up') #The channel is now 3.
TV.volume(20) #The volume is 20.
TV.dirV('down') #The volume is now 19.
TV.mute('mute') #To restore volume, type 'unmute'.
TV.mute('unmute') #Volume is back to 19. To silence volume, type 'mute'.
TV.displayC #Currently 3
# TV.displayV 
TV.show(1000)
TV.volume(1000)
TV.power('off') #off 

#future tasks - try without self. TV only works if on. display this is the max volume.
