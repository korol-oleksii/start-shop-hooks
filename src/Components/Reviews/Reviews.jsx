import './Reviews.css';
import {useEffect, useState} from "react";
import Review from "./Review/Review";

const Reviews = () => {

    let [reviews, setReviews] = useState([
        {
            id: 1,
            nameUser: 'Alex',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum ducimus esse eum explicabo fuga officia omnis perferendis!',
            date: '28.01.2024, 23:22:43'
        },
        {
            id: 2,
            nameUser: 'Iren',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, saepe!',
            date: '27.01.2024, 18:32:01'
        },
        {
            id: 3,
            nameUser: 'Denys',
            body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, saepe!',
            date: '20.01.2024, 15:09:12'
        },
    ]);
    let [currentUser, setCurrentUser] = useState('');
    let [currentReview, setCurrentReview] = useState('');

    const CurrentUserHandler = (e) => {
        setCurrentUser(e.target.value);
    }
    const CurrentReviewHandler = (e) => {
        setCurrentReview(e.target.value);
    }
    const AddReviewHandler = () => {
        let error = document.querySelector('.error');

        if (currentReview) {
            let review = {
                id: reviews.length + 1,
                nameUser: currentUser ? currentUser : 'Guest',
                body: currentReview,
                date: new Date().toLocaleString(),
            }
            setReviews([review, ...reviews]);

            setCurrentUser('');
            setCurrentReview('');

            error.innerText = '';
        } else {
            // alert('Field "Review" is required');
            error.innerText = 'Field "Review" is required';
        }
    }

    return (
        <div className="Reviews reviews">
            <div className="reviews__body mesh--cell">
                <div className="reviews__row">
                    <h2>Reviews</h2>
                    <div className="reviews__fields">
                        <label className="reviews__label">
                            <input className="input input--text" onChange={(e) => CurrentUserHandler(e)} type="text"
                                   value={currentUser}
                                   placeholder=""/>
                            <span className="text--placeholder">Name</span>
                        </label>
                        <label className="reviews__label">
                            <textarea className="input input--textarea" onChange={(e) => CurrentReviewHandler(e)}
                                      value={currentReview}
                                      name="" id="" placeholder=""></textarea>
                            <span className="text--placeholder">Review</span>
                            <span className="error"></span>
                        </label>
                        <div className="reviews__action">
                            <button className="button button--primary btn-add-review" onClick={AddReviewHandler}>
                                Add review
                            </button>
                        </div>
                    </div>
                </div>
                <div className="reviews__row reviews__cards">
                    {
                        reviews.map(review => <Review review={review} key={review.id}/>)
                    }
                </div>
            </div>
        </div>
    )
}

export default Reviews;