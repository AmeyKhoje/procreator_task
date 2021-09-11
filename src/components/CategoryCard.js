const CategoryCard = (props) => {
    const {
        name,
        image
    } = props;

    return (
        <div className="category-card">
            <div className="category-card_img">
                <img src={image} alt="" />
            </div>
            <h5 className="category-card_title">
                {name}
            </h5>
        </div>
    )
}

export default CategoryCard