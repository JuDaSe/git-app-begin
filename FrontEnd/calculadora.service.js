

const calculadora = {

    sumar: function(a,b){
        let arr1 = [1,1,1]
        let arr2 = []
    },

    resta: function(a,b){
        return a-b
    },

    multi: function(a,b){
        return a*b
    },

    dividir: function(a,b){
        if(a === 0)
        {
            return 'Error'
        }
        else
        {
            return a / b
        }
    },
    sumatoria: function(arr){
        let sum = 0;
        for(let i = 0; i < arr.lenght; i++)
        sum += arr[i]
    }

}