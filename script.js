function agregarElemento() {
  const input = document.getElementById("itemInput");
  const texto = input.value.trim();

  if (texto === "") {
    alert("Por favor escribe un producto.");
    return;
  }

  const ul = document.getElementById("shoppingList");
  const li = document.createElement("li");

  li.innerHTML = `
    <span>${texto}</span>
    <button class="btn-delete" onclick="eliminarElemento(this)">Eliminar</button>
  `;

  ul.appendChild(li);
  input.value = "";
  input.focus();
}

function eliminarElemento(boton) {
  const li = boton.parentElement;
  li.remove();
}