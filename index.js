
const dbnationalities = require('./dbnationalities');

// Requerido en todos
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
// const { response } = require('express');

var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router); // Ruta principal

// router.route('/nationalitie').get((request, response) => {
//     dbnationalities.getUsuario().then(result => {
//         response.json(result[0]);
//     })
// })

router.route('/nationalities').get((request, response) => {
    dbnationalities.getNationalities()
        .then(result => {
            response.json(result[0]);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            response.status(500).json({ error: 'Internal Server Error' });
        });
});


var port = process.env.PORT || 8090;
app.listen(port);
console.log('Usuario API Iniciando en el puerto : ' + port); // Mensaje de inicio de servicio