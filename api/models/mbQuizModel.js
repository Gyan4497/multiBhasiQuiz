'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var QuizSchema = new Schema({
	ques: {
		type: String,
		required: 'please enter the question'
	},
	
	options: {type: Array, "default": [] },

	ans: { type: String }  
});


module.exports = mongoose.model('questions', QuizSchema );