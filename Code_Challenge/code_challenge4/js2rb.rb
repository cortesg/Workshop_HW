# a function that takes a word and capitalizes all the letters
def bigLetters(word)
  word.upcase
end

# a function that controls a television     
#  input is what you want the tv to do ex. "volume up"     
#  tvStatus is "on" or "off"
def remoteControl(tvStatus, input)               
  output = ""
  if tvStatus == "off" 
    output = "The TV is off. Turn the TV on first."       
  else 
    if input == "turn on" 
      output = "The TV is now on."
    elsif input == "turn off"              
      output = "The TV is now off."
    else                
      output = "TV input: #{input}" 
    end
  end
  output            
end

