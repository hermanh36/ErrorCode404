class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.integer :author_id, null: false
      t.string :title, null: false
      t.text :body, null:false
      t.integer :num_likes, null: false, default: 0
      t.timestamps
    end
  end
end
