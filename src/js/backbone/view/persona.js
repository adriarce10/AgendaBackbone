/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//ver minuto 5.40 de vistas
var ViewPersona= Backbone.View.extend({
    //tagName:'div',
    el:'#divAmostrar',
    //className:'contactoItem',
    
    initialize: function(){
      this.render();  
    },
    render: function(){
        this.$el.html("<p> Metodo render en accion.</p>");
    },
    
    events:{
        'mouseover #divAmostrar': 'funcionPrueba'
    },
    funcionPrueba:function(){
        this.$el.css('color','red');
    }
});


