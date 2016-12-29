/**
 * New node file
 */
exports.calcOperation = function(req, res) {
	
	var oprandString = req.param("oprandString");
	var json_response;
	var answer = eval(oprandString);
	
	json_responses = {
			"answer" : answer
		};
	
	res.send(json_responses);

};