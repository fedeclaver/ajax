



const multiplicar = (a,b) => a * b ;  
const suma = (a,b) => a + b ;  
const dividir = (a,b) => a / b ;  
const interes = (a,b) => multiplicar(a,b)/100 ;  


    // buscar interes por banco seleccionado
    const interesxBanco = [
    {id:1,banco:"SANTANDER",interes:40},
    {id:2,banco:"NACION",interes:30},
    {id:3,banco:"BBVA",interes:45},
    {id:4,banco:"HSBC",interes:32},
    {id:5,banco:"ICBC",interes:42}
    ];



class Prestamo {
    constructor( monto,plazo,estado) {
     // super(usuario)
        this.banco = "SANTANDER";
        this.monto  = parseFloat(monto);
        this.plazo = parseInt(plazo);   
        this.descripcion = `- Se ha solicitado un préstamo de $${this.monto} a devolver en ${this.cuotas} cuotas.`;   
        this.interes = this.buscarInteres();
        this.total = () => {
          let interesBanco= this.buscarInteres();
          return suma(this.monto,(interes(this.monto,interesBanco)))
        }
        this.cuota  = () => {
          return dividir(this.total(),this.plazo);
        } 
        this.estado = estado;
    }

 

   interesordenado = () => {
    return interesxBanco.sort(function (a, b) {
        if (a.interes > b.interes) {
          return 1;
        }
        if (a.interes < b.interes) {
          return -1;
        }
        // a must be equal to b
        return 0;
      });

   }
    buscarInteres = () => {     
       let int =  interesxBanco.find(element => element.banco === this.banco );  
       this.interes = int.interes;
      return this.interes
    }   
}


 const creditForm = document.querySelector('#creditForm'),
 inputMonto = document.getElementById('monto'),
 inputPlazo= document.getElementById('plazo');

 creditForm.onsubmit = (e) => {
 e.preventDefault();

    let formData = new FormData(creditForm);
    const monto = formData.get('monto');
    const plazo = formData.get('plazo');
    if (cantidadCuotas(plazo) == true){
      if (montoSolicitado(monto)==true){
    const prestamo = new Prestamo(monto, plazo,'simulacion');
    let total=prestamo.total();
    let int=prestamo.buscarInteres();
    let cuota=prestamo.cuota();
    let templateHead = `<table class="table">
    <thead>
      <tr>
        <th scope="col">Mes</th>
        <th scope="col">Cuota</th>
        <th scope="col">Interes</th>
        <th scope="col">Total</th>
        <th scope="col">SaldoDeudor</th>
      </tr>
    </thead>
    <tbody>`;
    let templateRows = '' ;
 
    let saldoDeudor=total;
    for (let index = 1; index <= plazo; index++) {            
       
        let interes =  int/plazo 
        let totalmes = cuota + (cuota * interes) /100
        templateRows += `
        <tr><td>${index}</td><td>${cuota.toFixed(2)}</td><td>${interes.toFixed(2)}%</td><td>${totalmes.toFixed(2)}</td><td>${saldoDeudor.toFixed(2)}</td></tr>
      `;
      saldoDeudor = saldoDeudor - cuota;
}
let templateFooter =  `  </tbody>
</table>
<div class="d-flex justify-content-end pt-4 gap-3">
      <button type="submit" class="btn btn-primary" onclick="solicitarPrestamo();" >Solicitar</button>           
        </div>
 `
 document.getElementById("tabla").innerHTML = templateHead + templateRows + templateFooter ;
 appendObjectToLocalStorage(prestamo,'prestamo');
      }
      }
};

const solicitarPrestamo = () => {

  let prestamo =loadFromLocalStorage('prestamo');
  prestamo[0].estado = 'otorgado';

       if (prestamo){        
          Swal.fire({
            title: 'Quiere guardar los cambios?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Save',
            denyButtonText: `Don't save`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              removeFromLocalStorage('prestamo');
              appendObjectToLocalStorage(prestamo,'prestamo');
              Swal.fire('Saved!', '', 'Credito Generado con Exito')
              
            } else if (result.isDenied) {
              Swal.fire('El credito no fue guardado', '', 'info')
            }
          })

         
            
        }
      }
