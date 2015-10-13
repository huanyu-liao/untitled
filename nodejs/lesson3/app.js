/**
 * Created by leo on 2015/10/10.
 */
var express = require('express');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');  //https://npmjs.org/package/node-jsonwebtoken
var expressJwt = require('express-jwt'); //https://npmjs.org/package/express-jwt
var app = express();

var secret = 'this is the secret secret secret 12356';



// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: secret}));

app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/'));

app.use(function(req, res, next){


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept");
    next();

});

app.post('/authenticate', function (req, res) {
    //TODO validate req.body.username and req.body.password
    //if is invalid, return 401
    if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
        res.status(401).send('Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        id: 123
    };

    // We are sending the profile inside the token
    var token = jwt.sign(profile, secret, { expiresInMinutes: 60*5 });

    res.json({ token: token });
});

app.get('/api/restricted', function (req, res) {
    console.log('user ' + req.user.email + ' is calling /api/restricted');
    res.json({
        name: 'foo'
    });
});

app.post('/submit/order', function (req, res) {
    var usr = req.body.usr;
    var number = req.body.number;
    var Rid = req.body.rID;

})

app.get('/get/:key', function(req,res){
    console.log(req.params.key);
    console.log(req.query.district);//输出表单get提交的login_name

    //query the restaurants
    if(req.params.key=='restaurants')
    {
        var dis = req.query.district;

    }

    //submit the order
    if(req.params.key=='order')
    {
        res.send('OK');//显示页面文字信息
    }

})

app.listen(8080, function () {
    console.log('listening on http://localhost:8080');
});