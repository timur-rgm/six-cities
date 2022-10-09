import { ReviewType } from "../../mocks/reviews"

type OneReviewType = {
  review: ReviewType,
}

export default function Review(props: OneReviewType) {
  const {review} = props;
  const {avatarSrc, userName, reviewRate, reviewDate, reviewText} = review;
  console.log(props)

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarSrc} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {userName}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: reviewRate * 20 + '%'}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {reviewText}
        </p>
        <time className="reviews__time" dateTime="2019-04-24">{reviewDate}</time>
      </div>
    </li>
  )
}
