module.exports = function(application){
    application.get("/noticias",function(req, res){
        application.app.controllers.noticias.verNoticias(application,req,res);
    })
    application.get("/noticia",function(req, res){
        application.app.controllers.noticias.verNoticia(application,req,res);
    })
}