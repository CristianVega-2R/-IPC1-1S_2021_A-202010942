let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://130.211.213.9:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


function tienda()
{
    document.getElementById("cardsc").innerHTML='';
    let text=""
    fetch("http://130.211.213.9:5000/obtenerMedicinas")
    .then(response => response.json())
    .then(data=>
        {
            text+="<h3>Tienda</h3>"
            text+=`<table class="table table-light">`
            for(var i = 0;i<data.length;i++)
            {
                text+=
                `
                <tr>
                    <td>${data[i].nombre}</td>
                    <td>${data[i].precio}</td>
                    <td>${data[i].descripcion}</td>
                    <td>${data[i].cantidad}</td>
                    <td><input type="button" id="${data[i].usuario}" class="btn btn-primary" value="Comprar"  onclick="comprar('${data[i].nombre}')"</td>
                </tr>
                `
                document.getElementById("cardsc").innerHTML=text;
            }
        });
        
}


function comprar(producto)
{
    alert("Comprado")
    fetch("http://130.211.213.9:5000/comprar/"+producto,
    {
        method:'POST',
        headers,
    })
    .then(response => response.json())
    .then
    (
        result => 
        {
            console.log('Success:', result);
        }
    )
    .catch(
        error =>
        {
            console.error('Error:', error)
        }
    )
    alert("Comprado")
}

function productos()
{
    alert("Comprado")
    document.getElementById("cardscCompras").innerHTML='';
    let text=""
    let total=0
    let totalProducto=0
    fetch("http://130.211.213.9:5000/finalizarCompra")
    .then(response => response.json())
    .then(data=>
        {
            text+= `<table class="table table-light">`
            for(var i = 0; i < data.length; i++)
            {
                totalProducto=parseFloat(data[i].cantidad)*parseFloat(data[i].precio)
                alert(i+"inicie")
                text+=
                        `
                        <tr>
                            <td>${data[i].nombre}</td>
                            <td>${data[i].precio}</td>
                            <td>${data[i].cantidad}</td>
                            <td>${totalProducto}</td>
                            <td<
                        </tr> 
                        `
                total+=parseFloat(data[i].cantidad)*parseFloat(data[i].precio)
            }
            text+= `
            <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td>${total}</td>
            </tr> 
            `
            text+=`</table>`
            alert(text)
            document.getElementById("cardscCompras").innerHTML=text;
            
        });
        alert("Comprado")
}