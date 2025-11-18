//funcion anonima (funcion entre parentesis), se llama a si misma para proteger el codigo
//y para que no afecte a alguna variable global ya que funciona como una caja cerrada, se pueden declarar
//variables u otras funciones dentro y no chocan con otras que esten afuera
//cuando se coloca una funcion esta adentro de parentesis, se convierte en una expresion, y cuando
//se coloca al final doble parentesis y punto y coma,  es porque eso se va a ejecutar inmediatamente.
//Intellinsense: cuando en VSCode es el autocompletado automatico en tiempo reals
(function () {
  //creando funcion en javascript
  const Slider = [...document.querySelectorAll(".FAQs__Body")]; //variable constante de nombre Slider que sirve para acceder al arbol creado para la pagina
  //DOM (Document Object Mode) estructura en forma de arbol que todos los navegadores crean de forma
  //automatica para las paginas web
  //querySelectorAll: devuelve todos los elementos de la pagina que coincida de una clase
  //se encierra en un par de corchetes y al principio se le añeden tres puntos para convertirlo en un array, 
  //se usa en lista, tarjeta y slider, porque son multiples elementos
  const ButtonNext = document.querySelector("#Next");
  //querySelector: devuelve el primer elemento de la pagina que coincidan con la clase,
  //comun en botones y titulos, porque son elementos unicos
  const ButtonBefore = document.querySelector("#Before");
  let value; //variable que permite cambiar de valor, lleva al elemento que esta en ese momento

  ButtonNext.addEventListener("click",() => ChangePosition(1)); //ya esta en JS, se define en algun lugar del codigo y se utiliza para cambiar de posicion

  ButtonBefore.addEventListener("click", () => ChangePosition(-1));
  //addEvenListener: metodo
  //click: cuando el usuario haga click en el elemento
  //()=>: forma corta de escribir function return
  //this: termino utilizado en el area de programacion,
  //que sirve para hacer referencia el objeto actual que se esta ejecutando

  function ChangePosition(add) {
    const FaQs = Number(document.querySelector(".FAQs__Body--Show").dataset.id);//se convierte a un entero
    //CDATA_SECTION_NODE:
    //CDATA: datos de caracter, sin internar interpretar, se obtiene
    //CDATA_SECTION: nodo de tipo especial, significa que se toma ese nodo como un data
    //dataset.id: devuelve el valor del id que se coloca, se un atributo difinido personalizado
    //diferencia:
    //CDATA_SECTION_NODE: se utiliza cuando se trabaja nodo sepecial de tipo CDATA con un xml, se ve muy poco
    //dataset.id: se utiliza cuando se utiliza html y se declaran los id, y es un atributo personalizado
    value = FaQs;
    value += add;

    if (value === Slider.length + 1 || value === 0) {
      //===: hace referencia a una igualdad estricta, compara dos veces (tipo y valor)
      value = value === 0 ? Slider.length : 1;
      //?: operador ternario, significa que esta haciendo el papel del else
      //condicion ? valorVerdadero : ValorFalso
      //length: es el numero de elementos
    }

    Slider[FaQs - 1].classList.toggle("FAQs__Body--Show");
    Slider[value - 1].classList.toggle("FAQs__Body--Show"); //accede al elemento que tenga el data-id (value)
  }
})();
//= asignacion
//== igualdad debil
//=== igualdad estricta
//!= diferencia debil
//!== diferencia estricta
