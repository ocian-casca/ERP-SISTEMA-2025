const btnToggleMenu = document.getElementById("btnToggleMenu");
const menuLateral = document.getElementById("menuLateral");
const btnSair = document.getElementById("btnSair");

if (btnToggleMenu && menuLateral) {
  btnToggleMenu.addEventListener("click", () => {
    menuLateral.classList.toggle("recolhido");
  });
}

/*
  A saída do sistema ainda depende da autenticação/backend.
  Por enquanto o botão existe apenas como parte da interface.
*/
if (btnSair) {
  btnSair.addEventListener("click", () => {
    console.log("Saída do sistema ainda não implementada.");
  });
}
