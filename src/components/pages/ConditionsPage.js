import React, { Component } from 'react';
import PagesLayout from './PagesLayout';

class ConditionsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <PagesLayout customClasses='condicionesSection'>
                <div class="col-md-6 offset-md-3 text-center mb-5 claim">
				<h2 class="mb-3">QUÉ TENÉS QUE SABER PARA ALQUILAR UN AUTO Y PREGUNTAS FRECUENTES</h2>
				<h1>CONDICIONES PARA ALQUILAR UN AUTO</h1>
			</div>
			<div class="col-md-12 p-0 mb-5">
				<div class="container-fluid">
					<div class="row mb-5">
						<div class="col-md-4 condiciones mb-5">
							<h3>Condiciones del alquiler</h3> 
							<ul class="list-unstyled">
								<li><i class="fas fa-angle-right"></i> Ser mayor de 21 años (Menores de 25 años pagan co-seguro)</li>
								<li><i class="fas fa-angle-right"></i> Documento de Identidad.</li>
								<li><i class="fas fa-angle-right"></i> Registro de conducir en vigencia.</li>
								<li><i class="fas fa-angle-right"></i> Tarjeta de Crédito (Propia o de un garante).</li>
								<li><i class="fas fa-angle-right"></i> Duración mínima de alquiler 48 hs.</li>
							</ul>
						</div>
						<div class="col-md-4 mb-4 aclaraciones">
							<h3>Aclaraciones</h3> 
							<ul class="list-unstyled">
								<li><i class="fas fa-angle-right txt-yellow"></i><span> Las reservas serán atendidas con automóviles de la misma categoría o, en caso de no haber disponibilidad, se entregará un vehículo de una categoría superior.</span></li>
								<li><i class="fas fa-angle-right txt-yellow"></i> Ninguna solicitud de reserva es válida sin la confirmación de Street mediante número de reserva.</li>
								<li><i class="fas fa-angle-right txt-yellow"></i> El vehículo alquilado sólo podrá ser conducido por el titular del contrato de alquiler, o quien éste designado con anterioridad por Street.</li>
								<li><i class="fas fa-angle-right txt-yellow"></i> La devolución del auto se contempla con 1 (una) hora de tolerancia para su devolución. Pasada la hora de tolerancia se cobrará ½ día de alquiler. Excedidas las 5 horas, se cobrará un día completo de alquiler.</li>
							</ul>
						</div>
						<div class="col-md-4 aclaraciones">
							<h3>Entrega de unidades</h3> 
							<ul class="list-unstyled">
								<li><i class="fas fa-angle-right txt-yellow"></i> Street entrega sus vehículos en su oficina central en Av. Cabildo 2280 Local 89 Ciudad Autónoma de Buenos Aires.</li>
								<li><i class="fas fa-angle-right txt-yellow"></i> En el caso de Pactar la entrega en su domicilio Street sumara los costos de DROP OFF al costo del alquiler de la unidad.</li>
								<li><i class="fas fa-angle-right txt-yellow"></i> Los vehículos se entregan con el tanque lleno y deberán ser devueltos de la misma manera. </li>
								<li><i class="fas fa-angle-right txt-yellow"></i> Los precios pueden ser modificados sin previo aviso. Para congelar el precio de una reserva se requiere el pago total del alquiler.</li>
							</ul>
							<h3>Formas de pago</h3> 
							<ul class="list-unstyled">
								<li><i class="fas fa-angle-right txt-yellow"></i> Podés pagar con Tarjetas Visa, Visa electrón, Tarjetas Master Card, Maestro, American Express, Tarjetas Cabal, Mediante transferencia bancaria, cheque y/o en efectivo. </li>
								<li><i class="fas fa-angle-right txt-yellow"></i> Los Alquileres se abonan por adelantado, ya sea en efectivo o con cualquier otra forma de pago.</li>
								<li><i class="fas fa-angle-right txt-yellow"></i> Todos los precios incluyen IVA del 21% y Seguro.</li>
							</ul>
						</div>
					</div>
					<hr />
					<div class="row">
						<div class="col-md-12 text-center mt-5 mb-4">
							<h2>Preguntas Frecuentes</h2>
						</div>
						<div class="col-md-6">
							<div id="accordion" class="faqs">
								<div class="card">
								    <div class="card-header" id="text1">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#1" aria-expanded="true" aria-controls="1">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Cómo sé si mi reserva está confirmada?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#1" aria-expanded="true" aria-controls="1"></i>
								      	</h5>
								    </div>

								    <div id="1" class="collapse" aria-labelledby="text1" data-parent="#accordion">
								      	<div class="card-body">Le enviaremos la confirmación mediante correo electrónico luego de que nos envíe los datos de la franquicia.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text2">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#2" aria-expanded="true" aria-controls="2">
								          		<i class="fas fa-info-circle txt-yellow"></i> He realizado una reserva y no he recibido confirmación alguna en mi email
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#2" aria-expanded="true" aria-controls="2"></i>
								      	</h5>
								    </div>

								    <div id="2" class="collapse" aria-labelledby="text2" data-parent="#accordion">
								      	<div class="card-body">Asegúrese de haber introducido una dirección de correo válida. Por favor, revise en la carpeta de correo no deseado de su gestor de correos, si no encuentra lo que busca por favor contáctesetelefónicamente al <a href="tel:08002208733">0800 220 8733</a>.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text3">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#3" aria-expanded="true" aria-controls="3">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Durante cuánto tiempo puedo alquilar un vehículo?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#3" aria-expanded="true" aria-controls="3"></i>
								      	</h5>
								    </div>

								    <div id="3" class="collapse" aria-labelledby="text3" data-parent="#accordion">
								      	<div class="card-body">Puedes hacer una reserva de máximo 60 días. Si necesitas el vehículo más tiempo y deseas prolongarla debes ponerte en contacto con nosotros al <a href="tel:08002208733">0800 220 8733</a>.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text4">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#4" aria-expanded="true" aria-controls="4">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Cómo se cuentan los días del alquiler?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#4" aria-expanded="true" aria-controls="4"></i>
								      	</h5>
								    </div>

								    <div id="4" class="collapse" aria-labelledby="text4" data-parent="#accordion">
								      	<div class="card-body">Los días se cuentan como 24 horas empezando desde el momento que empieza el periodo según el horario de la reserve inicial.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text5">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#5" aria-expanded="true" aria-controls="5">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Qué clase de seguro puedo adquirir para alquilar un coche?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#5" aria-expanded="true" aria-controls="5"></i>
								      	</h5>
								    </div>

								    <div id="5" class="collapse" aria-labelledby="text5" data-parent="#accordion">
								      	<div class="card-body">La cobertura del seguro es con franquicia FIJA, este es el importe por el cual el cliente responde ante la empresa por cualquier eventualidad.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text6">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#6" aria-expanded="true" aria-controls="6">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Puedo salir al extranjero con el vehículo?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#6" aria-expanded="true" aria-controls="6"></i>
								      	</h5>
								    </div>

								    <div id="6" class="collapse" aria-labelledby="text6" data-parent="#accordion">
								      	<div class="card-body">Sí, alquilamos autos para salir del país, lo único que tenés que hacer es realizar la reserva online y solicitar el adicional <em>Permiso Mercosur</em>.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text7">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#7" aria-expanded="true" aria-controls="7">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Qué hacer en caso de daños personales?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#7" aria-expanded="true" aria-controls="7"></i>
								      	</h5>
								    </div>
								    <div id="7" class="collapse" aria-labelledby="text7" data-parent="#accordion">
								      	<div class="card-body">
								        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								      	</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div id="accordion" class="faqs">
								<div class="card">
								    <div class="card-header" id="text8">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#8" aria-expanded="true" aria-controls="8">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Puedo eliminar la franquicia?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#8" aria-expanded="true" aria-controls="8"></i>
								      	</h5>
								    </div>

								    <div id="8" class="collapse" aria-labelledby="text8" data-parent="#accordion">
								      	<div class="card-body">No, las franquicias son FIJAS y es un requisito fundamental cubrir la misma con tarjeta de crédito antes de retirar la unidad.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text9">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#9" aria-expanded="true" aria-controls="9">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Cómo puedo abonar mi reserva?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#9" aria-expanded="true" aria-controls="9"></i>
								      	</h5>
								    </div>

								    <div id="9" class="collapse" aria-labelledby="text9" data-parent="#accordion">
								      	<div class="card-body">Podés abonar en efectivo, tarjeta de crédito o débito (American Express, Diners, Mastercard, Nativa, T.Naranja, Visa, Visa Electron y Maestro).</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text10">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#10" aria-expanded="true" aria-controls="10">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Cómo puedo recibir las novedades de Street?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#10" aria-expanded="true" aria-controls="10"></i>
								      	</h5>
								    </div>

								    <div id="10" class="collapse" aria-labelledby="text10" data-parent="#accordion">
								      	<div class="card-body">Enterate de todas nuestras novedades a través de nuestras redes sociales en <a target="_blank" href="https://www.facebook.com/FansStreetRentACar/">Facebook</a> ,<a target="_blank" href="https://twitter.com/StreetRentaCar"> Twitter</a>  o<a target="_blank" href="https://www.instagram.com/StreetRentaCar/"> Instagram</a>.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text11">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#11" aria-expanded="true" aria-controls="11">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Por qué debo llevar una tarjeta de crédito?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#11" aria-expanded="true" aria-controls="11"></i>
								      	</h5>
								    </div>

								    <div id="11" class="collapse" aria-labelledby="text11" data-parent="#accordion">
								      	<div class="card-body">La tarjeta de crédito sirve como garantía. Es obligatorio presentarla para poder retirar el vehículo, debe estar a nombre del conductor principal y ser válida.Por otras opciones comunicarse al <a href="tel:08002208733">0800 220 8733</a>.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text12">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#12" aria-expanded="true" aria-controls="12">
								          		<i class="fas fa-info-circle txt-yellow"></i> No tengo tarjeta de crédito ¿puedo alquilar un coche?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#12" aria-expanded="true" aria-controls="12"></i>
								      	</h5>
								    </div>

								    <div id="12" class="collapse" aria-labelledby="text12" data-parent="#accordion">
								      	<div class="card-body">Si, se puede usar la tarjeta de un tercero y también completar en efectivo la misma si es que el disponible en la línea de crédito no alcanzara para cubrir el 100 % de la Franquicia.</div>
									</div>
								</div>
								<div class="card">
								    <div class="card-header" id="text13">
								      	<h5 class="mb-0">
								        	<span class="float-left" data-toggle="collapse" data-target="#13" aria-expanded="true" aria-controls="13">
								          		<i class="fas fa-info-circle txt-yellow"></i> ¿Qué pasa si no me presento a la reserva?
								        	</span>
								        	<i class="fas fa-angle-down float-right mt-1" data-toggle="collapse" data-target="#13" aria-expanded="true" aria-controls="13"></i>
								      	</h5>
								    </div>

								    <div id="13" class="collapse" aria-labelledby="text13" data-parent="#accordion">
								      	<div class="card-body">
								        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
								      	</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
            </PagesLayout>
         );
    }
}
 
export default ConditionsPage;