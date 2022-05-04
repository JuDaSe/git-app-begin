const busqueda = new Vue({
    el: '#busqueda',
    data: {
    mensaje: ' ',
    id: undefined,
    filtro: [],
    personas: [
      { id: 1, name: "Juan", surname:"Segundo" },
      { id: 2, name: "Michael", surname:"Perez" },
      { id: 3, name: "Fernando", surname:"Muslera"},
    ],
  },
  methods:{
    obtenerPorId: function (id){
        let find = undefined
        let filterName = undefined
        let filterSurname = undefined
        this.personas.map( usuario => {
            if(usuario.id == parseInt(this.id)){
                find = usuario

                filterName = find.name
                filterSurname = find.surname
                this.mensaje = `Nombre completo: ${filterName} ${filterSurname}`  
                console.log(`Nombre completo: ${filterName} ${filterSurname}`  )      
            }
            else
            { this.mensaje = 'No se encontro el ID: ' + this.id }
        })
      }
  }
});


    