export const actions = {
    LOG_TIME: 'LOG_TIME',
    LOG_NAME: 'LOG_NAME',
    GET_SCORE_FETCH: 'GET_SCORE_FETCH',
    GET_SCORE_SUCCESS: 'GET_SCORE_SUCCESS'
}

export const getScoresFetch = () => (
    {
        type: actions.GET_SCORE_FETCH
    }
)

export const getScoresSuccess = (scores) => (
    {
        type: actions.GET_SCORE_SUCCESS,
        scores
    }
)