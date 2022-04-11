
/* My first alert box */
  alert("JavaScript funcionando correctamente");

  let variableSinValor= "";

  let booleano1 = true;
  let booleano2 = false;

  const PI = 3.14;
  const TAU = 3.14 * 2;
  console.log(TAU);

  const miNombre= "Alex";
  console.log(miNombre);
  let miNumeroFav = 87;
  
  var isCool = true; 
  console.log(isCool);

  console.log(miNombre.length);
  console.log(typeof miNombre);
  console.log(`My name is ${miNombre} and my favourite number is ${miNumeroFav}`);
  console.log("Seré un crack en JavaScript al terminar el bootcamp".toUpperCase());

  var crac = "Hola soy un crack"
  console.log(crac.substring(0,5))

  miNumeroFav = "87";
  console.log(typeof miNumeroFav);

  let task= `Hello world I am ${miNombre}, and I am trying to code`;
  console.log(task);

  console.log(PI.toFixed(2));

  /* arrays */

  const arrayVacio = ""
  const arrayNumeros = [0,1,2,3,4,5,6,7,8,9];
  console.log(arrayNumeros);

  const arrayNumeros2 = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  console.log(arrayNumeros2)

  const arrayNumerosPares = [0,2,4,6,8]
  console.log(arrayNumerosPares);

  const arrayNumerosNeg = [0,-1,-2,-3,-4,-5,-6,-7,-8,-9]
  console.log(arrayNumerosNeg);

  const holaMundo = ["Hola", "mundo"]
  console.log(holaMundo);

  const loGuardoTodo =  ['hola', 'que', 23, 42.33, 'tal'];
  console.log(loGuardoTodo);

  const arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']]
  console.log(arrayDeArrays);
  
  console.log(loGuardoTodo.length);
  const pushArray = "something";
  loGuardoTodo.push(pushArray);
  console.log(loGuardoTodo);

  arrayNumeros.reverse();
  console.log(arrayNumeros);

  arrayNumeros2.sort;
  console.log(arrayNumeros2);

  console.log(typeof loGuardoTodo);

  loGuardoTodo.push("Euralio");
  console.log(loGuardoTodo);


  /* Objects */

  const coches = {
    marca:"Fiat",
    modelo:"500", 
    matricula: "y543ghj"
   
  }

  console.log(coches);

  const casa = {
    codPostal: "",
    calle: "",
    portal: 0, 
    piso: 0
   
  }

  console.log(casa);

  const FullStackDeveloper = {
    arraylenguajes: "Javascript",
    arrayproyectos: "mi pagina personal"

  }

  console.log(FullStackDeveloper);

  const perro = {
    nombre: "",
    raza: "", 
    color: "",
    edad: 0
  }

  console.log(perro);

  const noticia = {
    titular: "",
    cuerpo: ""
  }

  console.log(noticia);

  const persona = {
    nombre: "Sergio",
    apellidos: "",
    edad: ""
  }

  console.log(persona.nombre);
  console.log(FullStackDeveloper.arraylenguajes)

  const portatil = {
      marca: "HP"
  }

  console.log(portatil.marca);
  console.log(portatil["marca"]);

  const concierto = {
      grupos: [1,2,3,4,5],
      fechas: "07/07/2007"
  }
  console.log(concierto.grupos);

  const led = {
    rojo: "100",
    verde: "100",
    azul: "100"
  }
  const arrayRGB = led;

  console.log(arrayRGB);

  const O_Error = {
    código: "01234"
  }

  console.log(O_Error.código);

  const grupo = {
    integrantes: ["David", "Frank", "Declan"]
  }
  let integrantes = grupo.integrantes
  console.log(integrantes[1]);

  const impresora = {
      tinta: ["rojo", "verde", "azul"]
  }

  const nivelesTinta = impresora.tinta;
  console.log(nivelesTinta);

  const movil = {
    especificaciones: ["ram", "memoria", "etc"]
  }
  const especificaciones = movil.especificaciones;
  console.log(especificaciones);

  portatil.marca = "MSI";
  console.log(portatil.marca)   /* works without changing object from const to let */

  concierto.grupos.push("Guns N Roses");
  console.log(concierto.grupos);

  const newDate = "11/04/2022";
  concierto.fechas = newDate;
  console.log(concierto.fechas);

  grupo.integrantes = integrantes.pop();
  console.log(integrantes.length);
