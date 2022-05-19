class PolymorphicVote < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :votable, polymorphic: true, index: true;
  end
end
