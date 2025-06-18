use movie_platform

// 10 документа в users
db.users.insertMany([
  { _id: 1, name: "Alice Johnson", email: "alice@gmail.com", password: "password1", created_at: ISODate("2025-06-01T10:00:00Z") },
  { _id: 2, name: "Bob Smith", email: "bob@gmail.com", password: "password2", created_at: ISODate("2025-06-02T11:30:00Z") },
  { _id: 3, name: "Carol Lee", email: "carol@gmail.com", password: "password3", created_at: ISODate("2025-06-03T09:15:00Z") },
  { _id: 4, name: "David Kim", email: "david@gmail.com", password: "password4", created_at: ISODate("2025-06-04T08:20:00Z") },
  { _id: 5, name: "Eva Green", email: "eva@gmail.com", password: "password5", created_at: ISODate("2025-06-05T07:45:00Z") },
  { _id: 6, name: "Frank Moore", email: "frank@gmail.com", password: "password6", created_at: ISODate("2025-06-06T06:55:00Z") },
  { _id: 7, name: "Grace Hall", email: "grace@gmail.com", password: "password7", created_at: ISODate("2025-06-07T13:10:00Z") },
  { _id: 8, name: "Hank Miller", email: "hank@gmail.com", password: "password8", created_at: ISODate("2025-06-08T12:40:00Z") },
  { _id: 9, name: "Ivy Scott", email: "ivy@gmail.com", password: "password9", created_at: ISODate("2025-06-09T14:00:00Z") },
  { _id: 10, name: "Jack Wilson", email: "jack@gmail.com", password: "password10", created_at: ISODate("2025-06-10T15:25:00Z") }
]);

// 10 документа в movies
db.movies.insertMany([
  { _id: 1, title: "The Lost City", genre: "Adventure", release_year: 2022, duration: 112 },
  { _id: 2, title: "Moonlight Shadows", genre: "Drama", release_year: 2020, duration: 98 },
  { _id: 3, title: "Galactic Wars", genre: "Sci-Fi", release_year: 2021, duration: 142 },
  { _id: 4, title: "Laugh Out Loud", genre: "Comedy", release_year: 2023, duration: 89 },
  { _id: 5, title: "Haunted Night", genre: "Horror", release_year: 2019, duration: 105 },
  { _id: 6, title: "Romance Rewind", genre: "Romance", release_year: 2024, duration: 110 },
  { _id: 7, title: "Action Zero", genre: "Action", release_year: 2022, duration: 120 },
  { _id: 8, title: "The Final Clue", genre: "Mystery", release_year: 2021, duration: 95 },
  { _id: 9, title: "Future Tense", genre: "Sci-Fi", release_year: 2023, duration: 123 },
  { _id: 10, title: "Echoes", genre: "Thriller", release_year: 2020, duration: 101 }
]);

// 10 документа в watch_history
db.watch_history.insertMany([
  { _id: 1, user_id: 1, movie_id: 3, watched_at: ISODate("2025-06-05T20:00:00Z") },
  { _id: 2, user_id: 2, movie_id: 1, watched_at: ISODate("2025-06-06T21:30:00Z") },
  { _id: 3, user_id: 3, movie_id: 2, watched_at: ISODate("2025-06-07T22:00:00Z") },
  { _id: 4, user_id: 4, movie_id: 4, watched_at: ISODate("2025-06-08T19:15:00Z") },
  { _id: 5, user_id: 5, movie_id: 5, watched_at: ISODate("2025-06-09T18:45:00Z") },
  { _id: 6, user_id: 6, movie_id: 6, watched_at: ISODate("2025-06-10T17:30:00Z") },
  { _id: 7, user_id: 7, movie_id: 7, watched_at: ISODate("2025-06-11T16:00:00Z") },
  { _id: 8, user_id: 8, movie_id: 8, watched_at: ISODate("2025-06-12T15:20:00Z") },
  { _id: 9, user_id: 9, movie_id: 9, watched_at: ISODate("2025-06-13T14:10:00Z") },
  { _id: 10, user_id: 10, movie_id: 10, watched_at: ISODate("2025-06-14T13:50:00Z") }
]);

// 10 документа в subscriptions
db.subscriptions.insertMany([
  { _id: 1, user_id: 1, plan: "Basic", start_date: ISODate("2025-05-01"), end_date: ISODate("2025-06-01"), is_active: false },
  { _id: 2, user_id: 2, plan: "Premium", start_date: ISODate("2025-06-01"), end_date: ISODate("2025-07-01"), is_active: true },
  { _id: 3, user_id: 3, plan: "Standard", start_date: ISODate("2025-06-02"), end_date: ISODate("2025-07-02"), is_active: true },
  { _id: 4, user_id: 4, plan: "Basic", start_date: ISODate("2025-06-03"), end_date: ISODate("2025-07-03"), is_active: true },
  { _id: 5, user_id: 5, plan: "Premium", start_date: ISODate("2025-05-15"), end_date: ISODate("2025-06-15"), is_active: false },
  { _id: 6, user_id: 6, plan: "Standard", start_date: ISODate("2025-06-04"), end_date: ISODate("2025-07-04"), is_active: true },
  { _id: 7, user_id: 7, plan: "Premium", start_date: ISODate("2025-06-05"), end_date: ISODate("2025-07-05"), is_active: true },
  { _id: 8, user_id: 8, plan: "Basic", start_date: ISODate("2025-06-06"), end_date: ISODate("2025-07-06"), is_active: true },
  { _id: 9, user_id: 9, plan: "Standard", start_date: ISODate("2025-06-07"), end_date: ISODate("2025-07-07"), is_active: true },
  { _id: 10, user_id: 10, plan: "Premium", start_date: ISODate("2025-06-08"), end_date: ISODate("2025-07-08"), is_active: true }
]);

// 10 документа в ratings
db.ratings.insertMany([
  { _id: 1, user_id: 1, movie_id: 3, rating: 4.5, rated_at: ISODate("2025-06-05T21:00:00Z") },
  { _id: 2, user_id: 2, movie_id: 1, rating: 3.0, rated_at: ISODate("2025-06-06T22:00:00Z") },
  { _id: 3, user_id: 3, movie_id: 2, rating: 4.0, rated_at: ISODate("2025-06-07T23:00:00Z") },
  { _id: 4, user_id: 4, movie_id: 4, rating: 5.0, rated_at: ISODate("2025-06-08T20:30:00Z") },
  { _id: 5, user_id: 5, movie_id: 5, rating: 2.5, rated_at: ISODate("2025-06-09T19:45:00Z") },
  { _id: 6, user_id: 6, movie_id: 6, rating: 3.5, rated_at: ISODate("2025-06-10T18:30:00Z") },
  { _id: 7, user_id: 7, movie_id: 7, rating: 4.0, rated_at: ISODate("2025-06-11T17:10:00Z") },
  { _id: 8, user_id: 8, movie_id: 8, rating: 3.8, rated_at: ISODate("2025-06-12T16:50:00Z") },
  { _id: 9, user_id: 9, movie_id: 9, rating: 4.2, rated_at: ISODate("2025-06-13T15:45:00Z") },
  { _id: 10, user_id: 10, movie_id: 10, rating: 3.9, rated_at: ISODate("2025-06-14T14:30:00Z") }
]);

