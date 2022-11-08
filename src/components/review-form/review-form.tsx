import React, {useState, FormEvent, ChangeEvent} from "react"
import {connect, ConnectedProps} from "react-redux";
import {postReviewAction} from '../../store/api-actions';
import {ThunkAppDispatchType} from "../../types/action";
import {SentReviewType} from "../../types/reviews";
import {RootStateType} from "../../store/root-reducer";

const mapStateToProps = ({PROCESS}: RootStateType) => ({
  activeOfferId: PROCESS.activeOfferId,
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
  const [comment, setComment] = useState({review: '', rating: ``});
  const {review, rating} = comment;

  const RATING_VALUES = ['5', '4', '3', '2', '1'];
  const MIN_COMMENT_LENGTH = 20;

  const isSubmitButtonDisabled = () => {
    return !rating || review.length < MIN_COMMENT_LENGTH;
  }

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (review && rating) {
      onSubmit({
        comment: review,
        rating: rating,
      }, activeOfferId);
    };

    setComment({review: '', rating: ''});
  };

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setComment((prevComment) => {return {...prevComment, [evt.target.name]: evt.target.value}});
  }

  return(
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={(evt: ChangeEvent<HTMLFormElement>) => {
        evt.preventDefault();
        handleSubmit(evt);
      }}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {RATING_VALUES.map((value) => {
          return (
            <React.Fragment key={value}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={value}
                checked={value === rating}
                id={`${value}-stars`}
                type="radio"
                onChange={handleFieldChange}
              />
              <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title="perfect">
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </React.Fragment>
          )
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={review}
        onChange={handleFieldChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">{MIN_COMMENT_LENGTH} characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={isSubmitButtonDisabled()}>Submit</button>
      </div>
    </form>
  );
}

export default connector(reviewForm);
