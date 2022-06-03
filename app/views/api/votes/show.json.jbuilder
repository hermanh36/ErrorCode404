if @vote 
    json.extract! @vote, :id, :voter_id, :votable_id, :vote_type, :votable_type
end

