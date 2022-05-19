class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :num_votes, default: 0, presence: true;
      t.integer :voter_id, presence: true;
      t.integer :post_id, presence: true;
      t.timestamps
    end
  end
end
