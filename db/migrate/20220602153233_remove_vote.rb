class RemoveVote < ActiveRecord::Migration[5.2]
  def change
    remove_column :votes, :num_votes
  end
end
