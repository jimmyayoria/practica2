function CallMenu() {
    let nro_ejercicio = parseInt(
        prompt("Elija el ejercicio que quiere realizar: \r\n 1. Sumar. \r\n 2. Sacar Promedio de Examanes \r\n 3. Calcular area del rectangulo \r\n 4. Calcular area del triangulo \r\n 5. Calcular area del Circulo \r\n 6. Calcular salario semanal \r\n 7. Convertir pulgadas \r\n 8. Cambiar a Dolares \r\n 9. Determina tu edad \r\n 10. Persona de menor edad. \r\n 11. Bono por antigüedad a empleados. \r\n 12. Salario anual con incremento. \r\n 13. Cantidad de aprobados y desaprobados \r\n 14. Calcular focos \r\n 15. ¿Puedes votar?")
    );
    if (isNaN(nro_ejercicio)) {
        alert("porfavor ingresa valores numericos");
    } else {
        MenuEjercicios(nro_ejercicio)
    }
}

function MenuEjercicios(nro_ejercicio) {
    switch (nro_ejercicio) {
        case 1:
            let valor1 = parseFloat(prompt("ingrese el valro 1 a sumar:"));
            let valor2 = parseFloat(prompt("ingrese el valro 2 a sumar:"));
            alert(ej1_sumarValores(valor1, valor2));
            break;

        case 2:
            let ex1 = parseFloat(prompt("ingrese la primera nota:"));
            let ex2 = parseFloat(prompt("ingrese la segunda nota:"));
            let ex3 = parseFloat(prompt("ingrese la tercera nota:"));
            let ex4 = parseFloat(prompt("ingrese la cuarta nota:"));
            alert(ej2_calcularPromedio(ex1, ex2, ex3, ex4))
            break;

        case 3:
            let base_rect = parseFloat(prompt("ingrese la base del recatngulo"));
            let altura_rect = parseFloat(prompt("ingrese la altura del recatngulo"));
            alert(ej3_CalcularAreaReactangulo(base_rect, altura_rect))
            break;

        case 4:
            let base = parseFloat(prompt("ingrese la base del rectangulo"));
            let altura = parseFloat(prompt("ingrese laaltura"));
            alert(ej4_CalcularAreaTriangulo(base, altura))

            break;

        case 5:
            let radio = parseFloat(prompt("ingrese radio del circulo"));
            alert(ej5_CalcularRadioCircul(radio))
            break;

        case 6:
            let salario_hora = parseFloat(prompt("ingrese el salario x hora"));
            let horas = parseFloat(prompt("ingrese la horas trabajadas"));
            alert(ej6_CalcularSalario(salario_hora, horas))
            break;

        case 7:
            let metros = parseFloat(prompt("Ingresa la cantidad en metros a convertir"));
            alert(ej7_pulgadas(metros));
            break;

            case 8:
                let sol = parseFloat(prompt("Ingresa la cantidad de soles a convertir"));
                alert(ej8_dolar(sol));
                break;
              
              case 9:
                let anio = parseInt(prompt("Ingresa el año en que naciste"));
                alert(ej9_edad(anio));
                break;
          
              case 10:
                let nombre1 = prompt("Ingresa el nombre de la 1ra persona");
                let edad1 = parseInt(prompt("Ingresa la edad de la 1ra persona"));
                let nombre2 = prompt("Ingresa el nombre de la 2da persona");
                let edad2 = parseInt(prompt("Ingresa la edad de la 2da persona"));
                let nombre3 = prompt("Ingresa el nombre de la 3ra persona");
                let edad3 = parseInt(prompt("Ingresa la edad de la 3ra persona"));
                alert(ej10_menor(nombre1,edad1,nombre2,edad2,nombre3,edad3));
                break;
          
              case 11:
                let tiemposervicio = parseInt(prompt("Ingresa la cantidad de años que se encuentra trabajando en la empresa"));
                alert(ej11_bono(tiemposervicio));
              break;
          
              case 12:
                alert(ej12_sueldoanual());
                break;
          
              case 13:
                let cantalumnos = parseInt(prompt("Ingresa la cantidad de alumnos"));
                let notaalumno = 0;
                let notas = [10,11];
                for(contador = 0; contador < cantalumnos; contador++)
                  {
                      notaalumno = parseInt(prompt(`Ingresa la nota del alumno ${contador+1}`));
                      notas[contador] = notaalumno;
                  }
                alert(ej13_notasalumnos(notas));
                break;
                

        case 14:
            let nro_focos = parseInt(prompt("ingrese el numero de focos:"))
            alert(ej14_CalcularColorFocos(nro_focos));
            break;


    }

}



function ej1_sumarValores(a, b) {
    if (isNaN(a) || isNaN(b)) {
        return " porfavor ingrese valores";
    } else {
        return a + b;
    }
}

function ej2_calcularPromedio(ex1, ex2, ex3, ex4) {
    if (isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)) {
        return "porfavor ingresa valores";
    } else {
        return (ex1 + ex2 + ex3 + ex4) / 4;
    }

}

function ej3_CalcularAreaReactangulo(base_rect, altura_rect) {
    if (isNaN(base_rect) || isNaN(altura_rect)) {
        return "ingresa valores numericos"
    } else {
        return "el area del rectangulo es :" + base_rect * +altura_rect;
    }

}


function ej4_CalcularAreaTriangulo(base, altura) {
    if (isNaN(base) || isNaN(altura)) {
        return "ingresa valores numericos"
    } else {
        return "el area del traiangulo es :" + (base * altura) / 2;
    }

}

function ej5_CalcularRadioCirculo(radio) {
    if (isNaN(radio)) {
        return "ingrese el radio"
    } else {
        const pi = 3.14
        return "el area del circulo es :" + pi * (radio * radio)
    }
}

function ej6_CalcularSalario(salario, horas) {
    let resultado = "";
    let limite = 40;
    if (isNaN(salario) || isNaN(horas)) {
        return "Por favor ingrese valores numericos";
    } else {
        if (horas > limite) {
            resultado =
                "Solo se pagaran " +
                limite +
                " horas semanales. Su salario es : " +
                salario * limite;
        } else if (horas > 0 && horas <= limite) {
            resultado = "Su salario es :" + salario * horas;
        }
        return resultado;
    }


}

function ej7_pulgadas(a){
    if(isNaN(a)){
      return "Por favor, ingresa valor";
    }else{
      return `${a} metros son ${(a*39.37).toFixed(2)} pulgadas.`;
    }
  }

  function ej8_dolar (a){
    if(isNaN(a)){
      return "por favor, ingresa valor";
    }else{
      return `S/${a} son US$${(a/3.9).toFixed(2)} al 5 de agosto del 2022.`;
    }
  }
  
  function ej9_edad (a){
    if(isNaN(a) || a > (new Date().getFullYear())-18){
      return "Por favor, ingresa valor";
    } else {
      return `Tu edad es: ${new Date().getFullYear() - a}`
    }
  }
  
  
  function ej10_menor(nombre1,edad1,nombre2,edad2,nombre3,edad3){
    if(nombre1 !== typeof "" || isNaN(edad1) || nombre2 !== typeof "" || isNaN(edad2) || nombre3 !== typeof "" || isNaN(edad3)){
      return "Por favor, ingresa un valor válido"
    } else {
      if(edad1 < edad2){
        if(edad1 < edad3)
        {
          return `${nombre1} con ${edad1} años es la persona con menor edad.`
        }
        else
        {
          return `${nombre3} con ${edad3} años es la persona con menor edad.`
        }
      }
      else
      {
        if(edad2 < edad3)
        {
          return `${nombre2} con ${edad2} años es la persona con menor edad.`
        }
        else
        {
          return `${nombre3} con ${edad3} años es la persona con menor edad.`
        }
      }
    }
  }
  
  function ej11_bono(tiemposervicio){
    if(isNaN(tiemposervicio))
    {
        return "Por favor, ingresa un valor válido.";
    }
    else
    {
        if(tiemposervicio > 0)
        {
            tiemposervicio = parseInt(tiemposervicio);
            switch (tiemposervicio) 
            {
                case 1:
                return `El bono que le corresponde es de: $${100}`;
  
            case 2:
                return `El bono que le corresponde es de: $${200}`;
  
            case 3:
                return `El bono que le corresponde es de: $${300}`;
  
            case 4:
                return `El bono que le corresponde es de: $${400}`;
  
            case 5:
                return `El bono que le corresponde es de: $${500}`;
  
            default:
                return `El bono que le corresponde es de: $${1000}`;
    }
        }
        else
        {
            return "No ha cumplido con el tiempo necesario para el bono";
        }
    }  
  }
  
  function ej12_sueldoanual()
  {
      let texto = " ";
      let sueldo = 1500;
      for(contador = 0; contador < 6 ; contador++)
      {
          sueldo *= 1.10;
          texto += `El salario del profesor en el año ${contador+1} es: $${sueldo.toFixed(2)} \r\n `;
      }
      return texto;
  }
  
  function ej13_notasalumnos(listanotas){
  
    if(isNaN(listanotas)){
      return "Por favor, ingresa un valor válido.";
    } else {
      let arraynotas = [1,2];
      arraynotas = listanotas;
      let desaprobados = 0;
      let aprobados = 0;
      let contador = 0;
  
      while(contador < arraynotas.length)
      {
        if(arraynotas[contador] < 10)
        {
            desaprobados += 1;
        }
        else
        {
            aprobados += 1;
        }
        contador++;
      }
  
      return `El número de desaprobados es ${desaprobados} y el número de aprobados es ${aprobados}`;
    }
  }
  

function ej14_CalcularColorFocos(nro_focos) {
    let focos = [];
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    if (isNaN(nro_focos)) {
        return "Por favor ingrese valores numericos";
    } else {
        for (let index = 0; index < nro_focos; index++) {
            let color = prompt("Ingrese el color del foco : ");
            focos.push({ color: color });
        }

        for (var property in focos) {
            switch (focos[property].color) {
                case "verde":
                    verde++;
                    break;
                case "blanco":
                    blanco++;
                    break;
                case "rojo":
                    rojo++;
                    break;
                default:
                    break;
            }
        }
        return (
            "Color de Focos Verdes : " +
            verde +
            " - Rojos : " +
            rojo +
            " - Blancos : " +
            blanco
        );
    }
}