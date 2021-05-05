let headers = new Headers()
headers.append('Content-Type', 'application/json');
headers.append('Accept', 'application/json');
headers.append('Access-Control-Allow-Origin', 'http://130.211.213.9:5000');
headers.append('Access-Control-Allow-Credentials', 'true');
headers.append('GET', 'POST', 'OPTIONS', 'PUT', 'DELETE');

function iniciarSesion()
{
    let usuario = document.getElementById("usuario");
    let contrasena = document.getElementById("contrasena");
    alert(usuario)
    alert(contrasena)
    if(usuario.value=="admin" && contrasena.value=="1234")
    {
        location.href =`../Admin/InicioAdmin.html`;
    }
    else
    {
        fetch(`http://130.211.213.9:5000/login/${usuario.value}/${contrasena.value}`)
        .then(response =>response.json())
        .then(data =>
        {
            if(data.nombre=="false")
            {
                alert("Verifique sus datos")
            }
            else if(data.tipo=="1")
            {
                alert("Inicio exitoso")
                usuarioInicio=usuario.value;
                location.href =`../Inicio/Inicio.html`;
            }
            else if(data.tipo=="2")
            {
                alert("Inicio exitoso")
                usuarioInicio=usuario.value;
                location.href="../InicioEnfermero/Menu.html"
            }
            else if(data.tipo=="3")
            {
                alert("Inicio exitoso")
                usuarioInicio=usuario.value;
                location.href="../Doctores/Menu.html"
            }
        })
    }
    
}