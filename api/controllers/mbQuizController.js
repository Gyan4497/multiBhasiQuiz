'use strict'

var mongoose = require('mongoose');
var Question = mongoose.model('questions');

exports.list_the_question = function(req, res) {
	Question.find({}, function(err, ques) {
		if(err) { res.send(err); }
		res.json(ques);
	});
};

exports.create_a_question = function(req, res) {
	var new_ques = new Question(req.body);
	new_ques.save(function(err, ques) {
		if(err) {
			res.send(err);
		}
		res.json(ques);
	});
};

exports.read_answer = function(req, res) {
	Question.findById(req.params.ques_id, function( err, ques) {
		if(err) {res.send(err);}
		res.json(ques);
	});
};