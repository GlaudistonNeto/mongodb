const mongoose = require('mongoose');

const articleModel = require('./articleModel');

mongoose.connect('mongodb://127.0.0.1:27017/payeverDB',
        {useNewUrlParser: true, useUnifiedTopology: true});

const Article = mongoose.model('Article', articleModel);

// Updating collection item
// Article.findByIdAndUpdate('64d3deedc8d6bd8607ce31ca', {
//   title: 'updatedTitle',
//   body: 'updatedBody',
//   author: 'updatedAuthor'
// }).then(() => {
//   console.log('update!');
// }).catch(err => {
//   console.log(err);
// });

// Deleting collection item
// Article.findByIdAndDelete('64d3dfd7c9ba0ec50fd167fb').then(() => {
//   console.log('Deleted!');
// }).catch(err => {
//   console.log(err);
// });

// Find the first register
// Article.findOne({}).then(articles => {
//   console.log(articles);
// }).catch(err => {
//   console.log(err);
// });

// Find By ...
// Article.find({'_id': '64d3e05678ccf608db2729da'}).then(articles => {
//   console.log(articles);
// }).catch(err => {
//   console.log(err);
// });
// Article.find({'author': 'otherAuthor', 'body': 'newBody'}).then(articles => {
//   console.log(articles);
// }).catch(err => {
//   console.log(err);
// });
// Article.find({'resume.author': 'myself'}).then(articles => {
//   console.log(articles);
// }).catch(err => {
//   console.log(err);
// });

// Find all articles
// Article.find({}).then(articles => {
//   console.log(articles);
// }).catch(err => {
//   console.log(err);
// });

// store new articles
// const article = new Article(
//   { title: "enoughNewTitle", author: 'sameAuthor', body: 'enoughBody',
//     resume: {
//       content: 'aContent',
//       author: 'myself'
//     }});

//   article.save().then(() => {
//     console.log('The article is safe');
//   }).catch(err => {
//     console.log(err);
//   });
