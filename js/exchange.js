//https://v6.exchangerate-api.com/v6/15cb137efeb1ec1eca309478/latest/USD
//apikey 15cb137efeb1ec1eca309478
//$.get('https://openexchangerates.org/api/currencies.json', function(data) {
//    console.log(data);
//});
const formulario = document.querySelector("#formulario");

document.addEventListener("DOMContentLoaded", () => {
    formulario.addEventListener("submit", convertir);
});

$(document).ready(function () {
    let dropdownOrigen = $("#paisOrigen");
    let dropdownDestino = $("#paisDestino");
    $.ajax({
        method: "GET",
        url: "https://openexchangerates.org/api/currencies.json",
        success: function (respuesta) {
            let options = [];
            $.each(respuesta, function (index, item) {
                options.push(
                    '<option value="',
                    index,
                    '" title="' + item + '">',
                    index,
                    "</option>"
                );
            });
            dropdownOrigen.append(options.join(""));
            dropdownDestino.append(options.join(""));
            $("#paisOrigen").val('ARS');
            $("#paisDestino").val('USD');
        },
    });
});

$( "#flecha" ).click(function() {
    let paisOrigen = document.querySelector("#paisOrigen").value;
    let paisDestino = document.querySelector("#paisDestino").value;
    $("#paisOrigen").val(paisDestino).change();;
    $("#paisDestino").val(paisOrigen).change();;
  });


function convertir(e) {
    e.preventDefault();
    let inputMonto = document.querySelector("#inputMonto").value;
    let paisOrigen = document.querySelector("#paisOrigen").value;
    let paisDestino = document.querySelector("#paisDestino").value;
    let resultado = document.querySelector("#resultado");
    let apikey = "15cb137efeb1ec1eca309478";
    let url = "https://v6.exchangerate-api.com/v6/" + apikey + "/latest/" + paisOrigen;
    if (inputMonto !="") {
        $.ajax({
            method: "GET",
            url: url ,
            success: function (respuesta) {
                const currencies = respuesta.conversion_rates[paisDestino];
                let resultado = inputMonto * currencies
                $("#resultado").text(resultado.toFixed(2)); 
            },
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Ups...",
            text: `No a ingresado un dato requerido`,
        });
    }
}
