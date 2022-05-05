json.extract! @answer, :id, :body, :num_likes, :author_id, :question_id
json.author_username @answer.author.username