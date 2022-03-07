const user = JSON.parse(localStorage.getItem("user")) || [];

//mensaje de bienvenida
 user.usuario != undefined ? Swal.fire(`Bienvenido ${user.usuario} !!`) :  window.location.replace("../index.html");

//animaciones
$('#portada').hover(function() {
    $(this).css("cursor", "pointer");
    $(this).animate({
        width: "90%",
        height: "90%"
    }, 'slow');

}, function() {
    $(this).animate({
        width: "100%",
        height: "100%"
    }, 'slow');

})


$( "#cerrarSesion" ).click(function() {
    removeFromLocalStorage('user');
})

//datos personales
$( "#cargarDatos" ).click(function() {
    Swal.fire({
        text: ` usuario: ${user.usuario} y mail: ${user.mail}`,
      showClass: {
          popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
      },
      showCancelButton: false,
      cancelButtonColor: '#6600FF',
      cancelButtonText: 'Cerrar'
  })
  });
