// El tipo de dato any, genera errores 
   
class PersonaTres{

    error_test:string ='Daniel';
    edad:number = 12; 


    // No tendremos un prototipo asignado, por tal tampoco los metodos con exactitud de ese tipo de dato
    sinDefinirTipo:any = 'Da'; 
    
   name(params:any) {
            this.sinDefinirTipo
    }
}