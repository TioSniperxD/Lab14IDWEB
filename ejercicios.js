/*3. Redondeo de precios. Pide un número decimal que represente el precio de un producto y que muestre:
• Redondeo hacia abajo
• Redondeo hacia arriba
• Redondeo normal
Tip: prueba con el número 12.49 y 12.5 */
function redondeoPrecios() {
    let num = parseFloat(prompt("Ingrese su precio de producto (En decimales XX,XX)"));
    if (isNaN(num)) {
        alert("Ingrese un numero, saliendo del programa")
        return;
    }

    alert("Redondeo hacia abajo: " + Math.floor(num)+
    "\nRedondeo hacia arriba: " + Math.ceil(num)+
    "\nRedondeo hacia normal: " + Math.round(num))
}

/*4. Número aleatorio en un rango. Crear una función numeroAleatorio(min, max) que devuelva un número entero entre min y
max (incluidos */
function numeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min)
}
/*5. Lanzamiento de dados. Simula el lanzamiento de dos dados (valores del 1 al 6) y muestra su suma.
Tip: reutiliza la función del ejercicio anterior */
function lanzamientoDados(){
    dado1 = numeroAleatorio(1, 6);
    dado2 = numeroAleatorio(1, 6);
    return dado1 + dado2;
}
/*6. Potencias y raíces. Solicita un número y muestra su cuadrado, cubo y raíz cuadrada usando Math.pow() y Math.sqrt()*/
function potenciaRaiz(){
    const num =parseFloat(prompt("Ingrese su numero"));
    alert(num+ " al cuadrado: "+ Math.pow(num,2)+"\n"+
          num+ " al cubo: " + Math.pow(num,3)+"\n"+
          num+ " a la raiz cuadrada: "+ Math.sqrt(num));
}
/*7. Conversión de grados a radianes y de radianes a grados. Crea una función gradosARadianes(grados) que convierta ángulos
de grados a radianes y muestre el seno y coseno del ángulo
Tip: usa la fórmula radianes = grados * (π / 180).
Crea una función radianesAGrados(radianes) que convierta ángulos de radianes a grados
Tip: usa la fórmula grados=radianes * (180/ π) */
function gradosARadianes(grados){
    const radianes=grados*(Math.PI/180);
    console.log("Sen("+grados+") " +Math.sin(radianes)+
          "\n Cos("+ grados+") " + Math.cos(radianes));
}
function radianesAGrados(radianes){
    return radianes*(180/Math.PI)
}

/*8. Generar contraseñas numéricas. Crear una función que genere una contraseña aleatoria de 6 dígitos (sólo números).
Tip: recorre un bucle 6 veces y genera un dígito del 0 al 9 en cada iteración*/
function contraseñaAleatoria(){
    let contraseña="";
    for(let i =0;i<6;i++){
        contraseña+=numeroAleatorio(0,9);
    }
    console.log(contraseña);
}
/*9. Calcular distancia entre dos puntos en el plano cartesiano. Dadas las coordenadas (x1, y1) y (x2, y2), calcular la distancia
entre los puntos y la suma de las distancias de cada punto al origen */
function calcularDistancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow(y2-y1,2)+Math.pow(x2-x1,2))
}

/*10. Normalización de calificaciones. Dado un arreglo de calificaciones, normalizar todos los valores al rango 0–1 dividiendo cada
nota entre el máximo del arreglo
Tip: usa el operador de propagación: Math.max(...array). */
const calificaciones=[17,13,12,2,5,18];
function normalizarCalificaciones(calificaciones){
    const maximo =Math.max(...calificaciones);
    const normalizadas=calificaciones.map(nota=>nota/maximo);
    return normalizadas
}
/*11. Control de inventario con encapsulación. Crear una clase Producto con atributos privados nombre, precio, stock.
Implementa setters que validen que el precio y el stock sean mayores a 0

Agregar un método vender(cantidad) que disminuya el stock solo si hay unidades suficientes */
/*12. Modificar Producto para que el getter precio devuelva el valor con formato de moneda ($120.00) y que el setter acepte
tanto número como cadena ("120.5")
Tip: puedes usar Number() y toFixed(2) */
/*13. Herencia. Crear una clase Figura. Debe tener un método area() y perímetro() que las subclases Cuadrado y Triangulo deben
sobrescribir.
Tip: llamar a constructor de la superclase */
/*14. Herencia. Crear una clase base Usuario con nombre y email. Que lo hereden Cliente y Administrador
• Cliente tiene un nivel de fidelidad [1–5]
• Administrador tiene permisos (crear, editar, eliminar)
Cada uno sobrescribe mostrarInfo() con diferente detalle
Tip: llama a super() para reutilizar atributos base*/
/*15. Polimorfismo. Crear una lista de usuarios (Cliente, Administrador) y recórrela mostrando la información con mostrarInfo().
Tip: usa un forEach o for...of para recorrer el array */
/*16. Herencia. Crear la jerarquía Empleado - Programador - ProgramadorSenior
• Empleado tiene nombre y sueldoBase
• Programador añade lenguaje y método calcularSueldo() con bono del 10%
• ProgramadorSenior sobreescribe calcularSueldo() con un bono del 25%
Tip: llama a super.calcularSueldo() desde la subclase */
/*17. Encapsulación y polimorfismo. Crear una clase Cuenta con atributo privado saldo y métodos depositar() y retirar().
Luego crea subclases CuentaAhorro y CuentaCorriente que redefinan retirar() según sus reglas (por ejemplo, permitir
sobregiro en la cuenta corriente pero con un límite) y también la transferencia entre cuentas
Tip: implementa validaciones distintas en cada clase hija.*/
/*18. Composición. Crear una clase Carrito que contenga una lista de objetos Producto. Agrega métodos agregarProducto(),
calcularTotal() y mostrarResumen()
Tip: usa un array de objetos */
/*19. Polimorfismo. Crear una clase base Notificacion con un método enviar(). Implementa subclases Email, SMS y Push que
sobrescriban enviar() con mensajes distintos. Luego crea una función que reciba una lista de notificaciones y las procese
dinámicamente
Tip: usa una estructura de datos adecuada que almacene objetos y que llame a notificacion.enviar() en un bucle*/