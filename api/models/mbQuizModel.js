'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
	ques: {
		type: String,
		required: 'please enter the question'
	},
	option1: { type: String },
	option2: { type: String },
	option3: { type: String },
	option4: { type: String },
	ans: { type: String }
});


module.exports = mongoose.model('questions', QuizSchema );