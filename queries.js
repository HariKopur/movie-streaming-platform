use movie_platform

// FIND

// Всички документи
db.watch_history.find();
// Филтриране по user_id
db.watch_history.find({ user_id: 1 });
// Филтриране по user_id и movie_id
db.watch_history.find({ user_id: 1, movie_id: 3 });

db.subscriptions.find();
// Филтриране по план
db.subscriptions.find({ plan: "Premium" });
// Филтриране по план и статус
db.subscriptions.find({ plan: "Premium", is_active: true });

// UPDATE

// Променя продължителноста на филма с id: 1
db.movies.updateOne(
  { _id: 1 },
  { $set: { duration: 115 } }
);

// Подновява абонамента на потребителя с id: 1
db.subscriptions.updateOne(
  { _id: 1 },
  { $set: { is_active: true } }
);

// DELETE

// Трие филма с id: 10
db.watch_history.deleteOne({ movie_id: 10 });

// Трие абонамент 
db.subscriptions.deleteOne({ plan: "Basic", user_id: 5 });

// Трие отзиви с по-нисък рейтинк от 3.0
db.ratings.deleteMany({ rating: { $lt: 3.0 } });

// AGGREGATE

// Брой регистрации по ден
db.users.aggregate([
  {
    $group: {
      _id: { $dateToString: { format: "%Y-%m-%d", date: "$created_at" } },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
]);

// Брой филми по жанр
db.movies.aggregate([
  { $group: { _id: "$genre", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);

// Брой гледания на филм
db.watch_history.aggregate([
  { $group: { _id: "$movie_id", views: { $sum: 1 } } },
  { $sort: { views: -1 } }
]);

// Брой по план
db.subscriptions.aggregate([
  { $group: { _id: "$plan", total: { $sum: 1 } } },
  { $sort: { total: -1 } }
]);
