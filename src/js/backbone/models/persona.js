
var Persona = Backbone.Model.extend({
    initialize: function () {
        console.log("Se ha creado un nuevo contacto");
        this.on('change',function(){
            console.log("Los datos de contacto se han modificado");
        });
    },
    defaults: {
        id: '',
        nombre: '',
        apellido: '',
        alias: '',
        telefono: '',
        email: '',
        direccion: '',
        fechaCreacion: '',
    },
    validate: function(atributos){
        if(!atributos.nombre)
             console.log("Debe tener un nombre");
         //poner para todos los atributos
    }
});
 /* PONER ESTA VALIDACION */
//unContacto.set({nombre:''},{validate:true})
