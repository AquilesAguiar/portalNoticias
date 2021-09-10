const { check, validationResult } = require('express-validator');

module.exports.validacoes = function(){
    return[
        check('titulo','Titulo é obigratório').notEmpty(),
        check('resumo','Resumo é obigratório').notEmpty(),
        check('resumo','Resumo deve conter entr 10 e 100 caracteres.').isLength({min:10,max:100}),
        check('autor','Autor é obigratório').notEmpty(),
        check('data_criacao','Data é obigratório').notEmpty(),
        check('data_criacao','Formato Invalido').isDate({format: 'YYYY-MM-DD'}),
        check('noticia','Noticia é obigratório').notEmpty()   
    ]
}

module.exports.formulario = function(app,req,res){
    res.render('admin/formulario',{error: '',noticia:''})
}
module.exports.noticiasSalvar = function(app,req,res){
    const noticia = req.body
    const errors = validationResult(req)

    
    if (!errors.isEmpty()) {
        return res.render('admin/formulario',{error: errors['errors'],noticia:noticia})
    }

    var connection = app.config.dbConnection()
    var NoticiasDAO = new app.app.models.NoticiasDAO(connection)
    NoticiasDAO.setNoticia(function(err,result){
        return res.redirect('/noticias')
    },noticia)
}