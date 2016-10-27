var request = require("request");

request.get({url: 'http://localhost/class-pictures/backend/ClassPictures/server.php?rota=teste'}, function (e, r, user) {
	console.log(r.body);
});