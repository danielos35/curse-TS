class Animal{

    // Cuando definimos una variables es por defecto de acceso publico
    tipo:string; 
    public eco:string;


    // El constructor es por defecto publico

    public constructor(){

    }


    // Los metodos también son por defecto públicos


    public verEcositema(){
        console.log(this.eco);
    }
}


// PRIVADO

class Persona{

    // Solo podré acceder a esta variable dentro de la clase
    private edad:string;

    constructor(edad){
        this.edad = edad;
    }

    private verEdad(){
        console.log(this.edad);
        
    }

}