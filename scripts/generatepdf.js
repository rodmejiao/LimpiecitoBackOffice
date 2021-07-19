function generatePDF() {

    let cliente = document.getElementById('clienteInput').value
    let direccion = document.getElementById('direccionInput').value
    let fecha = document.getElementById('fechaInput').value
  
  
    document.getElementById('clienteIN').textContent=cliente
    document.getElementById('direccionIN').textContent=direccion
    document.getElementById('fechaIN').textContent=fecha

    
    let totalAmount=document.getElementById(`TotalAmount`)
    totalAmount.textContent=calcTotal()

    var element = document.getElementById('previewPDF');
    console.log(element);
    html2pdf(element);
}



let articuloList=[]
let counter=0
function addArticulo() {
    let tbody=document.getElementById(`article-container`)
    let servicio =    document.getElementById('servicioInput').value
    let descripcion = document.getElementById('descripcionInput').value
    let precio =      document.getElementById('precioInput').value
    let cantidad =    document.getElementById('cantidadInput').value
  

    let newArticule= new Articulo(servicio,descripcion,precio,cantidad)

    let newRow= document.createElement(`tr`)
    let articuleTOPrint=Object.entries(newArticule)
    articuleTOPrint.forEach((art)=>{
        let newField= document.createElement(`td`)
        newField.textContent=art[1]
        newRow.appendChild(newField)
    })
    
    tbody.appendChild(newRow)
    articuloList.push(newArticule)



    document.getElementById('servicioInput').value=``
    document.getElementById('descripcionInput').value=``
    document.getElementById('precioInput').value=``
    document.getElementById('cantidadInput').value=``
    
}


function calcTotal() {
    articuloList.forEach(art => {
        counter+=art.precio*art.cantidad
  });
  return counter;
}


class Articulo {
    constructor(nombre,descripcion,precio, cantidad){
        this.nombre=nombre
        this.descripcion=descripcion
        this.precio=precio
        this.cantidad=cantidad
        this.subtotal=precio*cantidad
        
    }
}

