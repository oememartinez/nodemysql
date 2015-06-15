var DB = require('./modules/database');
var Database = new DB();

Database.SAVEDATA(["omar","Martinez",24,"Tijuana","oememartinez@gmail.com", 12121212 , 152112]);

Database.GETDATA(1,function(res){
   console.log(res.nombre);
});