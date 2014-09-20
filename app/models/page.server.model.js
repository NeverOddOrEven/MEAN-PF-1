'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Page Schema
 */
var PageSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Title cannot be blank'
	},
  subtitle: {
    type: String,
		default: '',
		trim: true
  },
	body: {
		type: String,
		default: '',
		trim: true
	},
  rank: {
    type: Number,
    default: 100
  },
	user: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Page', PageSchema);