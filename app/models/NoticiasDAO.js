function NoticiasDAO(connection){

    this.getNoticias = function(callback){
        connection.query('SELECT * FROM noticias',callback)
    }
    this.setNoticia = function(callback,noticia){
        connection.query('INSERT INTO noticias set ?',noticia,callback)
    }
    
    this.getNoticia = function(callback){
        connection.query('SELECT * FROM noticias WHERE id_noticia = 2',callback)
    }
}

module.exports = function(){
    
    return NoticiasDAO
}