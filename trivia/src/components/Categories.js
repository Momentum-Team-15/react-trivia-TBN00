export const Categories = ({ topicId, category, setSelectedCategoryId }) => {

    return (
        <div className="buttons">
            <button className='button is-danger' onClick={() => { setSelectedCategoryId(topicId) }}>{category}</button>
        </div>
    )
}