export type ReviewType = {
  avatarSrc: string,
  userName: string,
  reviewRate: number,
  reviewDate: string,
  reviewText: string,
}

export type ReviewsType = ReviewType[]

export type UnadaptedReviewType = {
  comment: string,
  date: string,
  id: number,
  rating: number,
  user: {
    avatar_url: string,
    id: number,
    is_pro: boolean,
    name: string,
  }
}

export type SentReviewType = {
  comment: string,
  rating: string,
} 