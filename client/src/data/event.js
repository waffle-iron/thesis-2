const ramen = {
  imageURL: "https://s3-media3.fl.yelpcdn.com/bphoto/IhfaY4tDZcd_lM5LEeSYjw/ms.jpg",
  name: "Tosh's Ramen",
  address:['123 Fake St', 'Fake', 'Fake City, FK 11111'],
  netVotes: 1,
  rating: 4,
  ratingImg: "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
  reviewCount: 302,
  url: "http://www.yelp.com/biz/toshs-ramen-salt-lake-city-2?adjust_creative=e-QBkPVuSWpweMbvJ7XxnA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=e-QBkPVuSWpweMbvJ7XxnA"
}

const ramen2 = {
  imageURL: "https://s3-media3.fl.yelpcdn.com/bphoto/IhfaY4tDZcd_lM5LEeSYjw/ms.jpg",
  name: "Tosh's Ramen LONG NAME THAT WILL BREAK THINGS",
  address:['123 Fake St', 'Fake', 'Fake City, FK 11111'],
  netVotes: 1,
  rating: 4,
  ratingImg: "http://s3-media2.fl.yelpcdn.com/assets/2/www/img/d63e3add9901/ico/stars/v1/stars_large_2_half.png",
  reviewCount: 302,
  url: "http://www.yelp.com/biz/toshs-ramen-salt-lake-city-2?adjust_creative=e-QBkPVuSWpweMbvJ7XxnA&utm_campaign=yelp_api&utm_medium=api_v2_search&utm_source=e-QBkPVuSWpweMbvJ7XxnA"
}

const event = {
  _id: '12345',
  name: 'hello',
  choice: [ramen],
  choices: [ramen, ramen2, ramen, ramen, ramen, ramen, ramen, ramen],
  isVoting: true,
  voteCompleted: false,
  date: 'February/27/1990',
  time: '12:23 PM'
}

export default event;
