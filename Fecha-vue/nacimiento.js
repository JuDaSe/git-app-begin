const fecha = new Vue ({
    el: '#fecha',
    data: {
        day: null,
        month: null,
        year: null,
        edad: null,
        mensaje: ''
    },
    methods:{
        boton: function (dia, mes, anio, edad) {
            this.dia = parseInt(this.day)
            this.mes = parseInt(this.month)
            this.anio = parseInt(this.year)

            const fecha = new Date();
            const añoActual = fecha.getFullYear();

            this.edad = añoActual - this.anio
            console.log(this.edad)

            if(this.edad >= 18)
             {
                this.mensaje = 'Felicidades eres mayor de edad, ya que tienes ' + this.edad
             }
             else {
                this.mensaje = 'Aun no cumples con la edad adecuada, ya que tienes ' + this.edad
             }
        }
    }
})