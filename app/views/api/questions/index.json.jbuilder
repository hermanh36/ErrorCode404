json.questions do
    @questions.each do |question|
        json.set! question.id do 
            json.extract! question, :id, :title, :body, :num_likes
        end
    end
end

