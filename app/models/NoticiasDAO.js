function NoticiasDAO(connection){

    this.getNoticias = function(callback){
        connection.query('SELECT * FROM noticias order by data_criacao DESC',callback)
    }
    this.setNoticia = function(callback,noticia){
        connection.query('INSERT INTO noticias set ?',noticia,callback)
    }
    
    this.getNoticia = function(id,callback){
        connection.query("SELECT * FROM noticias WHERE id_noticia ="+id,callback)
    }

    this.get5UltimasNoticias = function(callback){
        connection.query("SELECT * FROM noticias order by data_criacao DESC limit 5",callback)
    }
}

module.exports = function(){
    
    return NoticiasDAO
}