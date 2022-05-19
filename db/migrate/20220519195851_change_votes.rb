class ChangeVotes < ActiveRecord::Migration[5.2]
  def change
    change_column :votes, :num_votes, :integer, null: false;
    change_column :votes, :post_id, :integer, null: false;
    change_column :votes, :voter_id, :integer, null:false;
  end
end
