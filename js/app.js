function theme1() {
  $("body").attr("class", "bg-theme bg-theme1");
}

let theme2 = () => {
  $("body").attr("class", "bg-theme bg-theme2");
};

let theme3 = () => {
  $("body").attr("class", "bg-theme bg-theme3");
};

let theme4 = () => {
  $("body").attr("class", "bg-theme bg-theme4");
};

let theme5 = () => {
  $("body").attr("class", "bg-theme bg-theme5");
};

let theme6 = () => {
  $("body").attr("class", "bg-theme bg-theme6");
};

$("#theme1").click(theme1);
$("#theme2").click(theme2);
$("#theme3").click(theme3);
$("#theme4").click(theme4);
$("#theme5").click(theme5);
$("#theme6").click(theme6);
