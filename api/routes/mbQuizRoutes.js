'use strict'

module.exports = function(app) {
	var mbQuiz = require('../controllers/mbQuizController.js');

	app.route('/question')
	.get(mbQuiz.list_the_question)
	.post(mbQuiz.create_a_question);

	app.route('/question/answer')
	.get(mbQuiz.read_answer);

};