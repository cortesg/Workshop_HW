class User < ApplicationRecord
	has_attached_file :avatar, styles: { medium: "300x300>", thumb: "100x100>" }, default_url: "/images/:style/missing.png"
 	validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/
  	
    
end


# IGNORE BELOW 
# <%= user.check_box :remove_avatar %>

# in html:
# <%= form_for @user, url: users_path, html: { multipart: true } do |f| %>
# 		<%= f.check_box :image_delete %>
#   	 	<%= f.label :image_delete, 'Delete image' %>
#   	 	<% end %>



# attr_accessor :remove_avatar

#     before_save :delete_avatar, if: ->{ remove_avatar == '1' && !avatar_updated_at_changed? }
  
#   private

#   def delete_avatar
#     self.avatar = nil
#   end