// - - - - = = = = Routes = = = = - - - - 
var notes = require('../controllers/notes.js');
module.exports = function (app) {
    app.post('/notes', notes.create);
    app.get('/notes', notes.index);
    app.all('*', (request, response, next) => {
        response.sendFile(path.resolve("./anonNotes/dist/index.html"))
    });
}