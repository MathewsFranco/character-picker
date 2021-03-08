const buttons = document.querySelectorAll('.selectionButton')
const modal = document.querySelector(`.modal`)

function handlePick(e) {
  const button = e.currentTarget;
  modal.classList.add(`open`);
  modal.innerHTML = `<h1>Let's go ${button.id}!</h1>
  <a href=".">changed your mind?</a>`
  ;
}

buttons.forEach(button=> button.addEventListener(`click`, handlePick))