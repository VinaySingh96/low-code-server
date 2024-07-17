const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    trim: true,
    required: true
  },
  description: {
    type: String,
    trim: true,
  },
  images: {
    type: String,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  },
  comments: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'comment'
  },
  likes: {
    type: Number,
    default: 0
  }
})

module.exports = mongoose.model('post', postSchema);
