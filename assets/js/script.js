document.getElementById("arrow").addEventListener("click", function() {
    window.location.href = "index.html";
});
 
// Recibo //

document.getElementById("agregarItem").addEventListener("click", function() {
    var item = prompt("Ingrese el nombre del producto:");
    var precio = parseFloat(prompt("Ingrese el precio del producto:"));

    if (item && precio) {
        var listItem = document.createElement("li");
        listItem.textContent = item + " - $" + precio.toFixed(2);
        listItem.dataset.precio = precio;

        var eliminarBtn = document.createElement("button");
        eliminarBtn.textContent = "Eliminar";
        eliminarBtn.addEventListener("click", function() {
            listItem.parentNode.removeChild(listItem);
            calcularTotal();
        });

        listItem.appendChild(eliminarBtn);
        document.getElementById("items").appendChild(listItem);
        calcularTotal();
    }
});

function calcularTotal() {
    var total = 0;
    var items = document.querySelectorAll("#items li");

    items.forEach(function(item) {
        total += parseFloat(item.dataset.precio);
    });

    document.getElementById("totalAmount").textContent = total.toFixed(2);
}