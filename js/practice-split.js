{

	let letter = $("div").html();
  let text = $.trim(letter);
  let newTxt = "";
  text.split("").forEach(function (el) {
    newTxt += `<span>${el}</span>`;
  });
  $("div").html(newTxt);
  let i = 0;
  let setLetter = $("div span");
  const letterView = () => {
    setLetter[i].style.opacity = "1";
    i++;
    if (i < setLetter.length) {
      setTimeout(letterView, 100);
    }
  };
  window.addEventListener("load", () => {
    setTimeout(letterView, 100);
  });


}