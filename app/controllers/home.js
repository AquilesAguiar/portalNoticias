module.exports.home = function(app,req,res){

    var connection = app.config.dbConnection()
    res.render('home/index')
} 
    