import {useState, FormEvent, ChangeEvent} from "react"
import {connect, ConnectedProps} from "react-redux";
import {postReviewAction} from '../../store/api-actions';
import {ThunkAppDispatchType} from "../../types/action";
import {SentReviewType} from "../../types/reviews";
import {State} from "../../types/state";

const mapStateToProps = ({activeOfferId}: State) => ({
  activeOfferId,
})

const mapDispatchToProps = (dispatch: ThunkAppDispatchType) => ({
  onSubmit(review: SentReviewType, id: number) {
    dispatch(postReviewAction(review, id));
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function reviewForm(props: PropsFromReduxType) {
  const {activeOfferId, onSubmit} = props;
  const [comment, setComment] = useState({review: '', rating: 0});
  const {review, rating} = comment;

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (review && rating) {
      onSubmit({
        comment: review,
        rating: rating,
      }, activeOfferId);
    };
  };

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: ChangeEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleSubmit(evt);
        // console.log(comment);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio" />
        <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio" />
        <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio" />
        <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio" />
        <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio" />
        <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => {
          setComment({review: evt.target.value, rating: 5});
        }}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default connector(reviewForm);
