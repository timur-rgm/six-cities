import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux";
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";
import LoadingScreen from "../loading-screen/loading-screen";
import {getReviewByIdAction} from "../../store/api-actions";
import {AuthorizationStatus} from '../../const';
import {getLoadedReviewsStatus, getSortedByDateReviews} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user/selectors';
import {AppDispatch} from "../../types/state";

type ReviewListType = {
  id: number,
};

function ReviewList({id}: ReviewListType): JSX.Element {
  const reviews = useSelector(getSortedByDateReviews);
  const isReviewsLoaded = useSelector(getLoadedReviewsStatus);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getReviewByIdAction(id))
  }, []);

  return(
    <section className="property__reviews reviews" data-testid="reviews-container">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {isReviewsLoaded
          ? reviews.map((review, i) => 
              <Review
                review={review}
                key={review.userName+i}
              />)
          : <LoadingScreen />
        }
      </ul>

      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  )
}

export default ReviewList;
