class QuestionIndex < ActiveRecord::Migration[5.2]
  def change
    add_index :questions, :author_id
  end
end
