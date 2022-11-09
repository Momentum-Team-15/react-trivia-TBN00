


let triviaUrl = 'https://opentdb.com/api.php?amount=10&category='

export const Categories = ({topicId, category, setUrl}) => {

    return (
        <>
        <button onClick={() => setUrl(triviaUrl + topicId)}>{category}</button>
        </>
    )
}