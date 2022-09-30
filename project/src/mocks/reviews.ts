export type ReviewType = {
  avatarSrc: string,
  userName: string,
  reviewRate: number,
  reviewDate: string,
  reviewText: string,
}

export type ReviewsType = ReviewType[]

export const reviews: ReviewsType = [
  {
    avatarSrc: 'https://picsum.photos/54/54',
    userName: 'Mark',
    reviewRate: 4,
    reviewDate: 'September 2022',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
  {
    avatarSrc: 'https://picsum.photos/54/54',
    userName: 'Tom',
    reviewRate: 5,
    reviewDate: 'August 2022',
    reviewText: 'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
  },
]
