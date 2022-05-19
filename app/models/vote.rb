class Vote < ApplicationRecord
  validates :num_votes, presence: true;
  validates :voter_id, presence: true;
  validates :post_id, presence: true;

  belongs_to :User
  belongs_to :voted_on, polymorphic: true;
end
