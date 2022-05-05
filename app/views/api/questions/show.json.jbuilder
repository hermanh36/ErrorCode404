
json.extract! @question, :id, :title, :body, :num_likes, :author_id
json.author_username @question.author.username
json.answers @question.answers.each do |answer|
  json.extract! answer, :id, :body, :author_id, :question_id, :num_likes
end