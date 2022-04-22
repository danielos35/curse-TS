// Clase

class Vehiculo{
    marca:string;
    puertas:number;
    llantas:number;
    esDeportivo:boolean;


    constructor(marca:string, puertas:number, llantas:number,esDeportivo:boolean){
        this.marca = marca;
        this.puertas = puertas;
        this.llantas = llantas; 
        this.esDeportivo = esDeportivo; 
    }


    acelerar(){
        console.log('Acelerar');
    }

    frenar(){
        console.log('frenar');
        
    }
}

const carro1 = new Vehiculo('Ford',2,4,false); 


// Herencia

class Padre{
    

    elementoPadre:string;
    constructor(name){
        this.elementoPadre = name;
    }


    verNombre(){
        console.log(this.elementoPadre);
        
    }
}


class Hijo extends Padre{
    elementoHijo:string;
    constructor(elementoPadre, elementoHijo){
        super(elementoPadre); //Constructor de la clase padre 
        this.elementoHijo = elementoHijo; 
    }

    verPadreEHijo(){
        console.log(this.elementoPadre,this.elementoHijo);
        
    }
}

let objHijo = new Hijo('Padre', 'Hijo'); 

// Puedo acceder a propiedades y a metodos
objHijo.verPadreEHijo();
objHijo.verNombre();


