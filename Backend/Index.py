from flask import Flask,request,jsonify
from flask_cors import CORS
from Gestor import *


app = Flask(__name__)
app.config["DEBUG"] = True

CORS(app)

gestor = Gestor()

@app.route('/',methods=['GET'])
def home():
    return 'SERVER IS WORKING'

@app.route('/obtenerUsuarios')
def obtenerUsuarios():
    return gestor.obtenerUsuarios()

@app.route('/usuarios',methods=['POST'])
def crearUsuario():
    dato = request.json
    gestor.crearUsuario(dato['nombre'], dato['apellido'], dato['fecha'], dato['sexo'], dato['usuario'], dato['contrasena'], dato['telefono'],"","1")
    return "[Estado: Usuario Creado]"       

@app.route('/usuarios/<nombre>',methods=['DELETE'])
def eliminarUsuario(nombre):
    if(gestor.eliminarUsuario(nombre)):
        return 'Usuario eliminado'
    return 'Usuario no encontrado'

@app.route(("/usuarios/<nombreActualizar>"),methods=['PUT'])
def actualizarUsuario(nombreActualizar):
    dato = request.json
    if(gestor.actualizarUsuario(dato['nombre'], nombreActualizar, dato['apellido'], dato['fecha'], dato['sexo'], dato['usuario'], dato['contrasena'], dato['telefono'],"",dato['tipo'])):
        return 'Usuario actualizado'
    return 'No se encontró el usuario'

@app.route("/usuarios/<nombreBuscar>", methods=['GET'])
def buscarUsuario(nombreBuscar):
    return gestor.buscarUsuario(nombreBuscar)

@app.route("/login/<usuario>/<contrasena>", methods=['GET'])
def loginUsuario(usuario,contrasena):
    return gestor.loginUsuario(usuario,contrasena)

@app.route("/solicitar",methods=['GET'])
def retornarUsuario():
    return gestor.getUsuario()

@app.route("/enviarNombre/<nombre>/<tipo>",methods=['POST'])
def retornarNombreAdmin(nombre,tipo):
    gestor.setNombreAdmin(nombre,tipo)
    return 'Enviado'

@app.route("/recibirNombre",methods=['GET'])
def recibirNombreAdmin():
    return gestor.getNombreAdmin()

@app.route("/carga/<ruta>/<tipo>",methods=['POST'])
def cargaMasiva(ruta,tipo):
    return gestor.cargaMasiva(ruta,tipo)

@app.route("/cargaPaciente/<ruta>/<tipo>",methods=['POST'])
def cargaMasivaPaciente(ruta,tipo):
    return gestor.cargaMasivaPaciente(ruta,tipo)

@app.route("/carga/<ruta>",methods=['POST'])
def cargaMasivaMedicina(ruta):
    return gestor.cargaMasivaMedicina(ruta)

@app.route("/obtenerMedicinas",methods=['GET'])
def obtenerMedicinas():
    return gestor.obtenerMedicinas()

@app.route("/ingresarCita/<usuario>", methods=['POST'])
def ingresarCita(usuario):
    dato=request.json
    gestor.agregarCita(usuario,dato['fecha'],dato['hora'],dato['motivo'])
    return '[Cita creada]'

@app.route("/obtenerCitas",methods=['GET'])
def obtenerCitas():
    return gestor.obtenerCitas()

@app.route("/aceptar/<idCita>/<doctor>/<estadoNuevo>", methods=['PUT'])
def aceptarCita(idCita,doctor,estadoNuevo):
    if gestor.aceptar(idCita,doctor,estadoNuevo):
        return '[cita aceptada]'
    return '[cita no encontrada]'

@app.route("/recibirCita/<idCita>",methods=['POST'])
def recibirCita(idCita):
    gestor.setCitaRecetada(idCita)
    return '[cita guardada]'

@app.route("/entregarCita",methods=['GET'])
def entregarCita():
    return gestor.getCitaRecetada()

@app.route("/agregarReceta/<nombreUsuario>/<padecimiento>/<descripcion>",methods=['POST'])
def agregarReceta(nombreUsuario,padecimiento,descripcion):
    gestor.agregarReceta(nombreUsuario,padecimiento,descripcion)

@app.route("/obtenerRecetas", methods=['GET'])
def obtenerReceta():
    return gestor.obtenerRecetas()

@app.route("/recibirFactura/<idFactura>",methods=['POST'])
def recibirFactura(idFactura):
    gestor.setIdFactura(idFactura)
    return '[factura guardada]'

@app.route("/entregarFactura",methods=['GET'])
def entregarFactura():
    return gestor.getFacturaRecetada()

@app.route("/comprar/<nombre>",methods=['POST'])
def comprar(nombre):
    return gestor.comprarMedicina(nombre)

@app.route("/finalizarCompra",methods=['GET'])
def finalizarCompra():
    print(gestor.finalizarCompra()+"index")
    return gestor.finalizarCompra()

@app.route("/top5medicamentos",methods=['GET'])
def top5medicamentos():
    return gestor.top5medicamentos()

@app.route("/top3doctores",methods=['GET'])
def top3doctores():
    return gestor.top3doctores()

@app.route("/conteoEnfermedades",methods=['GET'])
def conteoEnfermedades():
    return gestor.mostrarEnfermedades()

if __name__ == "__main__":      
    app.run(host='0.0.0.0',debug=True)