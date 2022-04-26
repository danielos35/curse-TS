interface PersonaFunciones {
  // Definimos los parametros de la función
  (nombe: string, apellido: string, edad: number): void;
}

let funcion: PersonaFunciones = function (
  nombre: string,
  apellido: string,
  edad: number
) {
  console.log(`Mi nombre es ${nombre + "" + apellido} y tengo ${edad} años    `);
};
