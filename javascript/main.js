// Navbar
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".navbar");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("navbar_visible");
    if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
    } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
}
});
// Quienes somos seccion categorias
const categorias = document.querySelectorAll("#categorias .categoria");
const contenedorPreguntas = document.querySelectorAll('.contenedor_preguntas');
let categoriaActiva = null;

categorias.forEach((categoria) => {
	categoria.addEventListener('click', (e) => {
		categorias.forEach((elemento) => {
			elemento.classList.remove('activa');
		});

		e.currentTarget.classList.toggle('activa');
		categoriaActiva = categoria.dataset.categoria;


		// Activo el contenedor de preguntas que corresponde
		contenedorPreguntas.forEach((contenedor) => {
			if(contenedor.dataset.categoria === categoriaActiva){
				contenedor.classList.add('activo');
			} else {
				contenedor.classList.remove('activo');
			}
		});
	});
});
// Quienes somos seccion preguntas
const preguntas = document.querySelectorAll('.preguntas .contenedor_pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight entonces pone un valor.
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		// Reinicio las demas preguntas
		preguntas.forEach((elemento) => {
			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});
	});
});

// Enviar por Whatsapp en contacto
var enviarMensaje = document.getElementById('WSP');
console.log(enviarMensaje);
function mensaje_wsp(){
	var nombre = document.getElementById("nombre")
	//<input id="nombreform" type="text" name="name" class="form-control" id="name" placeholder="Nombre" value="Nombre" required>
	var mail = document.getElementById("email")
	var fechaTour = document.getElementById("fecha_tour")
	var tour = document.getElementById("tour")
	var motivo = document.getElementById("asunto")
	var mensaje = document.getElementById("consulta")

	console.log(nombre);

	//console.log(nombre.value)

	var mensaje_final
	mensaje_final ="Hola!,%20Mi%20Nombre%20es:%20" + nombre.value +",%20" 
	mensaje_final =  mensaje_final + "%20Mi%20Mail%20es:%20" + mail.value
	mensaje_final =  mensaje_final + "%20Me%20interesa%20el%20tour:%20" + tour.value
	mensaje_final =  mensaje_final + "%20el%20dia:%20" + fechaTour.value
	mensaje_final = mensaje_final + ",%20El%20Motivo%20de%20mi%20contacto%20es%20" + motivo.value + ",%20"
	mensaje_final = mensaje_final + "%20mensaje%20:%20" + mensaje.value

	var mensaje
	mensaje = "https://api.whatsapp.com/send?phone=+5491136457467&text=" + mensaje_final 
	//Esto%20es%20una%20prueba
	enviarMensaje.href = mensaje  
}

enviarMensaje.addEventListener('click', mensaje_wsp)

// Suscripcion
function suscripcion (){
	var mailSuscripcion = document.getElementById("mail_suscripcion").value;
	if (mailSuscripcion == "") {
		alert("Debes ingresar tu email"); 
	} else {
		alert ("Te suscribiste a nuestra Newsletter!")
	}
}
