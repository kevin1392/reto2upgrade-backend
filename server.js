var fs = require('fs');
const _ = require('lodash');
var argv = require('yargs').argv;

var add = 'add';
var list = 'list';
var comando= process.argv[2];

var obj = JSON.parse(fs.readFileSync('directorio.json', 'utf8',function(err,data){
        if (err) {
            console.log("Se ha producido un error!!");
            console.log("RUUUUN");
        }

        console.log(data);
    }));

if (comando == add){
    var file2={ nombre: argv.nombre, numero:argv.numero};
    obj.contactos.push(file2);

    fs.writeFile('directorio.json',JSON.stringify(obj), function (err) {
        if (err)
            console.log(err);
        else
            console.log('Contacto creado');
            console.log('--');
            console.log('nombre : ' + file2.nombre);
            console.log('numero : ' + file2.numero);
            console.log('--');
    });
}

else if (comando == list){
    
   //var num= JSON.parse(fs.readFileSync('directorio.json', 'utf8'));
    console.log('Numero de Contacto(s) : ' + obj.contactos.length);  
    for (var i in obj.contactos) {
              
        console.log('--');
        console.log('nombre : ' + obj.contactos[i].nombre);
        console.log('numero : ' + obj.contactos[i].numero);
        console.log('--');
        //console.log(obj.contactos[i].nombre)
      }
 }













// var object = {'key':'value'}; 
// console.log(object)

// console.log( 
//     JSON.stringify(object) 
// );







// fs.readFile('directorio.json','utf8',function(err,data){
//     if (err) {
//         console.log("Se ha producido un error!!");
//         console.log("RUUUUN");
//     }

     
// });


// var other = _.concat(obj.contactos, 'to', 'HackSpace', 'CoreUpgrade',2018);
 //console.log(obj.contactos);


// fs.readFile('frase.txt','utf8',function(err,data){
//     if (err){
//         console.log('Se ha producido un error');
//     }
//     console.log(data)
// })
// console.log("I see what you did there");



// fs.writeFile('test.txt','Bienvenido al Coreupgrade 2018',function(err){
//     if(err)
//         console.log(err)
//     else
//         console.log('Se ah escrito el archivo de manera exitosa');
// })
