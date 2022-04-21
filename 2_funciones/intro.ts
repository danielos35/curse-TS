let sumar = function(a:number,b:number):number{
    return a+b;
}

console.log(sumar(12,3));


// Parametros opcionales 
    // Se realiza con un signo de interrogante apodo?:string 
    // Siempre debe ser el ultimo parametro

    let opcionales = function(nombre:string, edad:number, apodo?:string):any{
        
        console.log(`me llamo${nombre}, tengo ${edad} y me gusta que me llamen ${apodo||'Por mi nombre'}`);
        
    }
    
    opcionales('Daniel',12,'Dani')
    opcionales('Daniel',12)
    

// Parametros por defecto
    // 1. En caso de pasarle un parametro remplazará al parametro por defecto

let defecto = function(nombre:string, edad:number = 22, apellido?:string):void{

    console.log(`me llamo ${nombre}, tengo ${edad} y me gusta que me llamen ${apellido||'Por mi nombre'}`);
    
}

defecto('Daniel')


// Parametros rest 
    let frutas = function(...frutas:string[]):void{
            console.log(frutas);
    }; 

    frutas('Manzana', 'Pera', 'Maiz')