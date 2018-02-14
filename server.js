var fs = require('fs');
const _ = require('lodash');
var argv = require('yargs').argv;

var add = 'add';
var list = 'list';
var read = 'read';
var remove = 'remove';

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
    console.log('Numero de Contacto(s) : ' + obj.contactos.length);  
    
    for (var i in obj.contactos) {          
        console.log('--');
        console.log('nombre : ' + obj.contactos[i].nombre);
        console.log('numero : ' + obj.contactos[i].numero);
        console.log('--');
      }
 }

 else if (comando == read){
    var file3={ nombre: argv.nombre};
    //console.log(file3);
    var encontrar = _.find(obj.contactos,file3);
    if(encontrar){
        console.log('Contacto Encontrado');
        console.log('--');
        console.log('nombre : ' + encontrar.nombre);
        console.log('numero : ' + encontrar.numero);
        console.log('--');
    }
    else {
        console.log('No encontrado');
        console.log('--');
    }
    
 }

else if(comando == remove){
    var file4={ nombre: argv.nombre};
    var encontrar = _.find(obj.contactos,file4);
    var removido = obj;
    var i=0;
    var n=removido.contactos.length;

    //console.log('ENCONTRADO : ' + JSON.stringify(encontrar));
    //console.log(removido.contactos.length);

    for (i = 0; i < n; i++) {
        if (removido.contactos[i].nombre == file4.nombre) {
          removido.contactos.splice(i, 1);
          break;
        }
      }

    if (i == n) console.log('No encontrado');
    else console.log('Contacto Removido');

    fs.writeFile('directorio.json',JSON.stringify(removido), function (err) {
        if (err)
            console.log(err);
        else
            console.log('--');

    });

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
