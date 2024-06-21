const luachonsua = document.getElementById("chinh_sua");
const formSua = document.getElementById("formluachon");
let dem = 0;
luachonsua.addEventListener("dblclick", function () {
  if (dem == 0) {
    formSua.style.display = "flex";
    dem = 1;
  } else {
    formSua.style.display = "none";
    dem = 0;
  }
});
