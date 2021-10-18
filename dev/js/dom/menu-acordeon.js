let menuAcordeon = () => {
  // let btnActive = document.getElementsByClassName('acordeon__button');
  let btnActive = Array.from(document.querySelectorAll('.acordeon__button'));

  // for (let i = 0; i < btnActive.length; i++) {
  //   let buttonClick = btnActive[i];
  //   buttonClick.style.cursor = 'pointer';
  //   // buttonClick.style.padding = '.5' + 'rem';
  //   buttonClick.addEventListener('click', () => {
  //     buttonClick.classList.toggle('acordeon__active');
  //     // console.log(buttonClick);
  //     let panel = buttonClick.nextElementSibling;
  //     if (panel.style.maxHeight) {
  //       panel.style.maxHeight = null;
  //     } else {
  //       panel.style.maxHeight = panel.scrollHeight + 'px';
  //     }
  //   });
  // }

  // panel.style.maxHeight

  btnActive.forEach((elem) => {
    let rec = elem;
    rec.addEventListener('click', (e) => {
      rec.classList.toggle('acordeon__active');
      let panel = rec.nextElementSibling;
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    })
  })




}

export default menuAcordeon;
