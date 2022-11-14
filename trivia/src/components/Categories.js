export const Categories = ({ topicId, category, setSelectedCategoryId }) => {

    return (
        <>
            <button onClick={() => { setSelectedCategoryId(topicId) }}>{category}</button>
        </>
    )
}