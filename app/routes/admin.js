const { check, validationResult } = require('express-validator');
module.exports = function(app){
    app.get("/formulario",function(req, res){
        res.render('admin/formulario')
    })
    app.post("/noticias/salvar",function(req, res){
        var noticia = req.body
        var connection = app.config.dbConnection()
        var NoticiasDAO = new app.app.models.NoticiasDAO(connection)
        NoticiasDAO.setNoticia(function(err,result){
           res.redirect('/noticias')
        },noticia)
    })
}

