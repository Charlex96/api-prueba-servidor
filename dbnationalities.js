var config = require('./dbconfig'); // Instanciamos el archivo dbconfig
const sql = require('mssql'); // Se necesita paquete mssql

// Funcion Async : Asíncrona, devuelve un objeto
async function getNationalities() {
    try {
        let pool = await sql.connect(config);
        let nationalities = await pool.request().query("SELECT *  FROM AdmNationalities");
        return nationalities.recordsets;
    } catch (error) {
        console.error('Error fetching nationalities:', error);
        throw error; // Agregamos throw para propagar el error hacia arriba
    }
}

module.exports = {
    getNationalities: getNationalities,
};