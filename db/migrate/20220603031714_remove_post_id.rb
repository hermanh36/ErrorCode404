class RemovePostId < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :post_id
  end
end
