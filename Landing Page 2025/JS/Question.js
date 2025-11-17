(function () {
  const TitleQuestions = document.querySelectorAll(".Questions__Title"); //sirve para que los titulos sean dinamicos

  TitleQuestions.forEach((Question) => { //servira para iterar entre los elementos
    Question.addEventListener("click", () => {//evento de click
      let HeightValue = 0; //sirve para calcular el alto de los elementos
      let Answer = Question.nextElementSibling;//obtiene el elemento siguiente en el DOM
      //nextElementSibling: es una propiedad que sirve para recorrer, obtiene el elemento hermano
      //que le sigue al elemento, guarda el elemento para poder manipularlo luego
      let AddPadding = Question.parentElement;


      AddPadding.classList.toggle(".Questions__Padding--Add");

      Question.children[0].classList.toggle("Questions__Arrow--Rotate");//asignandole a Question los elementos
      //children: obtiene a los hijos del elemento 

      if (Answer.clientHeight === 0) {//si height es igual a 0 esta cerrado, pero si es igual a scrollHeight muestra el contenido
        HeightValue = Answer.scrollHeight;//actualiza HeightValue con la altura total del contenido
        //clientHeight: altura visible actual del elemento
        //scrollHeight: toma la altura total real del contenido interno, aunque este oculto
      }
      Answer.style.height = `${HeightValue}px`;
      //style.height: ajusta la altura de forma dinamica tanto para mostrarla o esconderla
    });
  });
})();

//la comilla invertida (`) en JS se llama backtick
//backtick: se usa para crear una plantilla de texto, la diferencia con la comilla simple ('), es 
//que este creara una cadena de texto