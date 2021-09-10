module.exports.home = function(app,req,res){
    var connection = app.config.dbConnection()
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection)
    NoticiasDAO.get5UltimasNoticias(function(err, result){
        res.render('home/index',{noticias: result})
    })
} 
    