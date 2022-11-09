import axios from "axios";

export const requestCategories = async () => {
    const URL='https://opentdb.com/api_category.php'
    const response = await axios.get(URL)

    return response
}


export const requestQuestions = async (topicId) => {
    const URL=`https://opentdb.com/api.php?amount=10&category=${topicId}`
    const response = await axios.get(URL)

    return response
}
