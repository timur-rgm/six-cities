import {useEffect} from "react"
import {connect, ConnectedProps} from 'react-redux';
import Review from "../review/review";
import ReviewForm from "../review-form/review-form";
import LoadingScreen from "../loading-screen/loading-screen";
import {fetchReviewByIdAction} from "../../store/api-actions";
import {ThunkAppDispatchType} from '../../types/action';
import {State} from "../../types/state";
import {AuthorizationStatus} from '../../const';

const mapStateToProps = ({activeOfferId, authorizationStatus, user, reviews, isReviewsLoaded,}: State) => ({
  reviews,
  isReviewsLoaded,
  activeOfferId,
  authorizationStatus,
  user,
})

const mapDispatchToProps = (dispatch: ThunkAppDispatchType) => ({
  onloadReviews(id: number) {
    dispatch(fetchReviewByIdAction(id));
  },
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromReduxType = ConnectedProps<typeof connector>;

function ReviewList(props: PropsFromReduxType): JSX.Element {
  const {activeOfferId, authorizationStatus, reviews, isReviewsLoaded, onloadReviews} = props;

  useEffect(() => {
    onloadReviews(activeOfferId);
  }, [])

  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
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

export default connector(ReviewList);
