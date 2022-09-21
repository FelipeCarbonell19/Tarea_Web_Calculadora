
let display = document.getElementById("display");

document.getElementById("borrarNumero").addEventListener("click", () => {
  display.value = "";
});

for (let i = 0; i <= 9; i++) {
  document.getElementById([i]).addEventListener("click", () => {
    display.value += [i];
  });
}

document.getElementById("borrarTodo").addEventListener("click", () => {
  display.value = display.value.substring(0, display.value.length - 1);
});

document.getElementById("punto").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0
  ) {
    display.value += ".";
  }
});

document.getElementById("division").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0
  ) {
    display.value += "/";
  }
});

document.getElementById("producto").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0
  ) {
    display.value += "*";
  }
});

document.getElementById("suma").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0
  ) {
    display.value += "+";
  }
});

document.getElementById("resta").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0
  ) {
    display.value += "-";
  }
});

document.getElementById("igual").addEventListener("click", () => {
  display.value = eval(display.value);
});

let displayAuto = document.getElementsByClassName("displayAuto")[0];
document.getElementById("Botones").addEventListener("click", () => {
  if (
    display.value[display.value.length - 1] != "*" &&
    display.value[display.value.length - 1] != "/" &&
    display.value[display.value.length - 1] != "." &&
    display.value[display.value.length - 1] != "-" &&
    display.value[display.value.length - 1] != "+" &&
    display.value.length != 0 &&
    display.value != undefined
  ) {
    displayAuto.value = eval(display.value);
  }
});
