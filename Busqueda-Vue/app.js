const busqueda = new Vue({
    el: '#busqueda',
    data: {
    id: undefined,
    mensaje: // Colocar mensaje
    personas: [
      { id: 1, name: "Juan", surname:"Segundo" },
      { id: 2, name: "Michael", surname:"Perez" },
      { id: 3, name: "Fernando", surname:"Muslera"},
    ],
  },
  methods:{
    obtenerPorId: function (id){
        let find = undefined
        this.personas.map( usuario => {
            if(usuario.id == parseInt(this.id)){
                find = usuario
            }
        })
        return find ? console.log(find) : console.log("no se encontro")
      }
  }
});
    