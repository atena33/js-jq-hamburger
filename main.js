// primo click, appare il menù;
// se cliccko che è già visibile, invece scompare.

var menu = $(".hamburger-menu");
var icona = $(".fa-bars");
var close = $('.fa-times');

icona.click(
  function(){
    menu.show();
  }
)
// se cliccko che è già visibile, invece scompare.

close.click (
  function () {
    icona.show();
    menu.hide();
  }
)
