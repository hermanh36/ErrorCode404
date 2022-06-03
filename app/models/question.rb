class Question < ApplicationRecord
  validates :title, :body, :num_likes, :author_id, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  has_many :answers,
    foreign_key: :question_id,
    class_name: :Answer

  has_many :votes, as: :votable
end
 