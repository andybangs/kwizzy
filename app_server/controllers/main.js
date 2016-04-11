module.exports.index = function index(req, res, next) {
  res.render('index', { title: 'Express' });
}
