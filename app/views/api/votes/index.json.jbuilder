if @votes 
    @votes.each do |vote|
        json.set! vote.id do 
            json.extract! vote, :id, :voter_id, :votable_id, :vote_type, :votable_type
        end
    end
end

