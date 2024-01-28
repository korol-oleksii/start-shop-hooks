const Review = ({review}) => {

    return (
        <div className="Review review">
            <div className="review__card">
                <div className="review__name">
                    {review.nameUser}
                </div>
                <div className="review__comment">
                    {review.body}
                </div>
                <div className="review__date">
                    <span className="text--small">Added at:</span> {review.date}
                </div>
            </div>
        </div>
    )
}

export default Review;