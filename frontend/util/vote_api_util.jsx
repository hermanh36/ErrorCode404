
export const createVote = (vote) => {
    return $.ajax({
        method: 'post',
        url: `/api/votes`,
        data: {vote: vote}
    })
}

export const destroyVote = (voteId) => {
    return $.ajax({
        method: 'delete',
        url: `/api/votes/${voteId}`
    })
}

export const fetchVotes = () => {
    return $.ajax({
        method: 'get',
        url: `/api/votes`
    })
}

export const fetchVote = (postId) => {
    return $.ajax({
        method: 'get',
        url: `/api/votes/${postId}`
    })
}