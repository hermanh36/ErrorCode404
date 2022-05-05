@answers.each do |answer|
    json.set! answer.id do 
        json.extract! answer, :id, :body, :num_likes, :author_id, :question_id
        json.author_username answer.author.username
    end
end

