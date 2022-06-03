class Vote < ApplicationRecord
  validates :voter_id, presence: true;

  belongs_to :voter,
  foreign_key: :voter_id,
  class_name: :User

  belongs_to :votable, polymorphic: true;
end
