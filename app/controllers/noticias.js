module.exports.verNoticias = function(app,req,res){
    var connection = app.config.dbConnection()
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection)
    NoticiasDAO.getNoticias(function(err, result){
        res.render('noticias/noticias',{noticias: result});
    })
}

module.exports.verNoticia = function(app,req,res){
    var connection = app.config.dbConnection()
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection)
    
    NoticiasDAO.getNoticia(function(err, result){
        res.render('noticias/noticia',{noticias: result});
    })
}