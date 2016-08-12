class AddUserIdToTransactions < ActiveRecord::Migration[5.0]
  def change
  	add_column :transactions, :user_id, :string
  end
end
