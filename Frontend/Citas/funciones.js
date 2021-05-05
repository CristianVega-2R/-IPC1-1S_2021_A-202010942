let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://130.211.213.9:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS','PUT','DELETE');


function generarBoton()
{
    
    let text=""
    fetch("http://130.211.213.9:5000/solicitar")
    .then(response => response.json())
    .then(data=>
    {
        document.getElementById("cardsc").innerHTML='';
        alert(data.nombre)
        text=
        `
        <input type="button" class="btn btn-primary" id="solicitar" value="Solicitar" onclick="solicitarCita('${data.nombre}')">
        `
        alert(text)
        document.getElementById("cardsc").innerHTML=text;
    })
    
}

function solicitarCita(usuario)
{
    alert(usuario)
    let fecha = document.getElementById("fecha");
    let hora = document.getElementById("hora");
    let motivo = document.getElementById("motivo");

    fetch("http://130.211.213.9:5000/ingresarCita/"+usuario,
        {
            method:'POST',
            headers,
            body:
            `{
                "fecha":"${fecha.value}",
                "hora":"${hora.value}",
                "motivo":"${motivo.value}"
            }` 

        }
    
    )
    .then(response =>  response.json())
    .then(
        result=>
        {
            console.log(result);
            fecha.value=''
            hora.value=''
            motivo.value=''
            alert("Cita creada")
        }    
    )
    .catch(
        error=>
        {
            console.error(error)
            fecha.value=''
            hora.value=''
            motivo.value=''
        }
    )

}