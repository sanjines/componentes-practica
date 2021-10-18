const hamburgerMenu = (btnAmburger, menu) => {

  let doc = document;
  doc.addEventListener('click', (e) => {
    // console.log(e.target);

    // e.preventDefault();
    if (e.target.matches(btnAmburger) || e.target.matches(`${btnAmburger} *`)) {
      doc.querySelector(menu).classList.toggle('js--menuActive');
    }
  })
}

export default hamburgerMenu;