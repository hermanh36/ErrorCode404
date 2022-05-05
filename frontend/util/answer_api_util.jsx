
export const fetchAnswers = () => {
    return $.ajax({
        method: 'get',
        url: '/api/answers'
    })
}

export const fetchAnswer = (answerId) => {
    return $.ajax({
        method: 'get',
        url: `/api/answers/${answerId}`
    })
}

export const createAnswer = (answer) => {
    return $.ajax({
        method: 'post',
        url: 'api/answers',
        data: {answer: answer}
    })
}

export const updateAnswer = answer => {
    return $.ajax({
        method: 'patch',
        url: `api/answers/${answer.id}`,
        data: {answer: answer}
    })
}

export const deleteAnswer = answerId => {
    return $.ajax({
        method: 'delete',
        url: `api/answers/${answerId}`
    })
}