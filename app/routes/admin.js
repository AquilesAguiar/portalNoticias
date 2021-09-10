var validacoesForm = require('../controllers/admin').validacoes()
module.exports = function(application){
    application.get("/formulario",function(req, res){
        application.app.controllers.admin.formulario(application,req,res)
    })

    application.post("/noticias/salvar",validacoesForm,function(req, res){
        
        application.app.controllers.admin.noticiasSalvar(application,req,res)
    })
}

