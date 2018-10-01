module.exports = function(app){
    app.get('/', function(req, res){
        res.render('index');
    });

    app.post('/user/add', function(req, res){
        res.render('index');
        let email = req.body.email;
        console.log(email);
    });

    app.delete('/index', function(req, res){

    });
}