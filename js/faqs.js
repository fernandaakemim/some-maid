//----------------------FAQs---------------------- //
let answer = document.querySelectorAll("[data-answer]");
const arrowExpand = document.querySelectorAll("[data-button]");

arrowExpand.forEach(element => {
    element.addEventListener("click", (event) => {
      operaAnswer(event.target.dataset.button);
      //event.target captura onde o evento ocorreu
      //.dataset.button captura o atributo do data-button
    })
});
  
function operaAnswer(indexString) {
    let i = parseInt(indexString);
    let statusAnswer = answer[i].dataset.answer;
      
    if (statusAnswer === "hide") {
      answer[i].setAttribute("data-answer", "show"); // setAttribute altera o atributo do elemento (primeiro parâmetro), para o atributo passado (segundo parêmetro)
    } else {
      answer[i].setAttribute("data-answer", "hide");
    }
  }
