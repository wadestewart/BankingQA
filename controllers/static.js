// GET - Static homepage
function home(req, res) {  
  res.render('welcome');
}

function dashboard(req, res) {
  res.render('dashboard')
}
  
  module.exports = {
    home,
    dashboard
  }
