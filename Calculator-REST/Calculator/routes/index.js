
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('calculator', { title: 'The CALCULATOR' });
};