// alert('aaaa');

function onclickTd(td) {
  alert(td.cellIndex)
}

$(function() {
  $(".piece").draggable();
});
