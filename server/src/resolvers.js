const Category = require('./models/Category');
const Joke = require('./models/Joke');

const resolvers = {
  Query: {
    info: () => null,
    categories: () => {
      return Category.find()
        .then(result => result)
        .catch(error => error);
    },
    category: (obj, args) => {
      return Category.findOne({ name: args.name })
        .then(result => result)
        .catch(error => error);
    },
    jokes: () => {
      return Joke.find()
        .then(result => result)
        .catch(error => error);
    },
    joke: (obj, args) => {
      return Joke.findOne({ id: args.id })
        .then(result => result)
        .catch(error => error);
    },
  },
  Category: {
    name: obj => obj.name,
    jokes: obj => {
      return Joke.find({ category: [obj.name] })
        .then(result => result)
        .catch(error => error);
    },
  },
  Joke: {
    category: obj => {
      if (!obj.category) {
        return null;
      }
      return Category.find({ name: obj.category[0] })
        .then(result => result)
        .catch(error => error);
    },
  },
};

module.exports = resolvers;
