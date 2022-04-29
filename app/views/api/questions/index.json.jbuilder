@questions.each do |question|
    json.set! question.id do 
        json.extract! question, :id, :title, :body, :num_likes, :author_id
        json.author_username question.author.username
    end
end

