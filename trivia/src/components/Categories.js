
let triviaUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({topicId, category, setUrl, setSelectedCategoryId, selectedCategoryId}) => {

    return (
        <>
        <button onClick={() => {setUrl(triviaUrl + topicId); setSelectedCategoryId(topicId)}}>{category}</button>

        </>
    )
}