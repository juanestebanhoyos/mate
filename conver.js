
function convertir() {
    let valor=document.getElementById("valor").valueAsNumber;
    let lista1=document.getElementById("lista1").value;
    let lista2=document.getElementById("lista2").value;
    
    let operacion=0;
    if (lista1=="km"&&lista2=="km") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="km"&&lista2=="hm") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" hm"
    }else if (lista1=="km"&&lista2=="dem") {
        operacion= valor * 100
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="km"&&lista2=="m") {
        operacion= valor * 1000
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="km"&&lista2=="dm") {
        operacion= valor * 10000
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="km"&&lista2=="cm") {
        operacion= valor * 100000
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="km"&&lista2=="mm") {
        operacion= valor * 1000000
        document.getElementById("resultado").textContent = operacion+" mm"
    }

    if (lista1=="hm"&&lista2=="hm") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" hm"
    }else if (lista1=="hm"&&lista2=="km") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="hm"&&lista2=="dem") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="hm"&&lista2=="m") {
        operacion= valor * 100
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="hm"&&lista2=="dm") {
        operacion= valor * 1000
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="hm"&&lista2=="cm") {
        operacion= valor * 10000
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="hm"&&lista2=="mm") {
        operacion= valor * 100000
        document.getElementById("resultado").textContent = operacion+" mm"
    }

    if (lista1=="dem"&&lista2=="dem") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" dem"
    }else if (lista1=="dem"&&lista2=="km") {
        operacion= valor / 100
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="dem"&&lista2=="hm") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="dem"&&lista2=="m") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="dem"&&lista2=="dm") {
        operacion= valor * 100
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="dem"&&lista2=="cm") {
        operacion= valor * 1000
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="dem"&&lista2=="mm") {
        operacion= valor * 10000
        document.getElementById("resultado").textContent = operacion+" mm"
    } 

    if (lista1=="m"&&lista2=="m") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" m"
    }else if (lista1=="m"&&lista2=="km") {
        operacion= valor / 1000
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="m"&&lista2=="dem") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="m"&&lista2=="hm") {
        operacion= valor / 100
        document.getElementById("resultado").textContent = operacion+" hm"
        
    }else if (lista1=="m"&&lista2=="dm") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="m"&&lista2=="cm") {
        operacion= valor * 100
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="m"&&lista2=="mm") {
        operacion= valor * 1000
        document.getElementById("resultado").textContent = operacion+" mm"
    
    }

    if (lista1=="dm"&&lista2=="dm") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" dm"
    }else if (lista1=="dm"&&lista2=="km") {
        operacion= valor / 10000
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="dm"&&lista2=="dem") {
        operacion= valor / 100
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="dm"&&lista2=="m") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="dm"&&lista2=="hm") {
        operacion= valor / 1000
        document.getElementById("resultado").textContent = operacion+" hm"
        
    }else if (lista1=="dm"&&lista2=="cm") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="dm"&&lista2=="mm") {
        operacion= valor * 100
        document.getElementById("resultado").textContent = operacion+" mm"
    }

    if (lista1=="cm"&&lista2=="cm") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" cm"
    }else if (lista1=="cm"&&lista2=="km") {
        operacion= valor / 100000
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="cm"&&lista2=="dem") {
        operacion= valor / 1000
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="cm"&&lista2=="m") {
        operacion= valor / 100
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="cm"&&lista2=="dm") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="cm"&&lista2=="hm") {
        operacion= valor / 10000
        document.getElementById("resultado").textContent = operacion+" hm"
        
    }else if (lista1=="cm"&&lista2=="mm") {
        operacion= valor * 10
        document.getElementById("resultado").textContent = operacion+" mm"
    }

    if (lista1=="mm"&&lista2=="mm") {
        operacion= valor * 1
        document.getElementById("resultado").textContent = operacion+" mm"
    }else if (lista1=="mm"&&lista2=="km") {
        operacion= valor / 1000000
        document.getElementById("resultado").textContent = operacion+" km"
    }else if (lista1=="mm"&&lista2=="dem") {
        operacion= valor / 10000
        document.getElementById("resultado").textContent = operacion+" dem"
        
    }else if (lista1=="mm"&&lista2=="m") {
        operacion= valor / 1000
        document.getElementById("resultado").textContent = operacion+" m"
        
    }else if (lista1=="mm"&&lista2=="dm") {
        operacion= valor / 100
        document.getElementById("resultado").textContent = operacion+" dm"
        
    }else if (lista1=="mm"&&lista2=="cm") {
        operacion= valor / 10
        document.getElementById("resultado").textContent = operacion+" cm"
        
    }else if (lista1=="mm"&&lista2=="hm") {
        operacion= valor / 100000
        document.getElementById("resultado").textContent = operacion+" hm"
    }
}

function convertir2() {
    let valor2=document.getElementById("valor2").valueAsNumber
    let lista3=document.getElementById("lista3").value
    let lista4=document.getElementById("lista4").value
    let operacion=0

    if (lista3=="kg"&&lista4=="kg") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" kg"
    } else if(lista3=="kg"&&lista4=="hg") {
        operacion= valor2 * 10
        document.getElementById("resultado2").textContent= operacion+" hg"
    }else if(lista3=="kg"&&lista4=="t") {
        operacion= valor2 / 1000
        document.getElementById("resultado2").textContent= operacion+" t"
    }else if(lista3=="kg"&&lista4=="l") {
        operacion= valor2 * 2,205
        document.getElementById("resultado2").textContent= operacion+" l"
    }else if(lista3=="kg"&&lista4=="g") {
        operacion= valor2 * 1000
        document.getElementById("resultado2").textContent= operacion+" g"
    } else if(lista3=="kg"&&lista4=="µg") {
        operacion= valor2 * 1000000000
        document.getElementById("resultado2").textContent= operacion+" µg"
    }


    if (lista3=="hg"&&lista4=="hg") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" hg"
    } else if(lista3=="hg"&&lista4=="kg") {
        operacion= valor2 / 10
        document.getElementById("resultado2").textContent= operacion+" kg"
    }else if(lista3=="hg"&&lista4=="t") {
        operacion= valor2 / 10000
        document.getElementById("resultado2").textContent= operacion+" t"
    }else if(lista3=="hg"&&lista4=="l") {
        operacion= valor2 / 4,536
        document.getElementById("resultado2").textContent= operacion+" l"
    }else if(lista3=="hg"&&lista4=="g") {
        operacion= valor2 * 100
        document.getElementById("resultado2").textContent= operacion+" g"
    }else if(lista3=="hg"&&lista4=="µg") {
        operacion= valor2 * 100000000
        document.getElementById("resultado2").textContent= operacion+" µg"
    }

    
    if (lista3=="t"&&lista4=="t") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" t"
    } else if(lista3=="t"&&lista4=="kg") {
        operacion= valor2 * 1000
        document.getElementById("resultado2").textContent= operacion+" kg"
    }else if(lista3=="t"&&lista4=="hg") {
        operacion= valor2 * 10000
        document.getElementById("resultado2").textContent= operacion+" hg"
    }else if(lista3=="t"&&lista4=="l") {
        operacion= valor2 * 2205
        document.getElementById("resultado2").textContent= operacion+" l"
    }else if(lista3=="t"&&lista4=="g") {
        operacion= valor2 * 1000000
        document.getElementById("resultado2").textContent= operacion+" g"
    }else if(lista3=="t"&&lista4=="µg") {
        operacion= valor2 * 1000000000000
        document.getElementById("resultado2").textContent= operacion+" µg"
    }
    
    
    if (lista3=="l"&&lista4=="l") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" l"
    } else if(lista3=="l"&&lista4=="kg") {
        operacion= valor2 / 2,205
        document.getElementById("resultado2").textContent= operacion+" kg"
    }else if(lista3=="l"&&lista4=="t") {
        operacion= valor2 / 2205
        document.getElementById("resultado2").textContent= operacion+" t"
    }else if(lista3=="l"&&lista4=="hg") {
        operacion= valor2 / 4,536
        document.getElementById("resultado2").textContent= operacion+" hg"
    }else if(lista3=="l"&&lista4=="g") {
        operacion= valor2 * 453,6
        document.getElementById("resultado2").textContent= operacion+" g"
    }else if(lista3=="l"&&lista4=="µg") {
        operacion= valor2 *  453600000
        document.getElementById("resultado2").textContent= operacion+" µg"
    }

    if (lista3=="g"&&lista4=="g") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" g"
    } else if(lista3=="g"&&lista4=="kg") {
        operacion= valor2 / 1000
        document.getElementById("resultado2").textContent= operacion+" kg"
    }else if(lista3=="g"&&lista4=="t") {
        operacion= valor2 / 1000000
        document.getElementById("resultado2").textContent= operacion+" t"
    }else if(lista3=="g"&&lista4=="hg") {
        operacion= valor2 / 100
        document.getElementById("resultado2").textContent= operacion+" hg"
    }else if(lista3=="g"&&lista4=="l") {
        operacion= valor2 / 453,6
        document.getElementById("resultado2").textContent= operacion+" l"
    }else if(lista3=="g"&&lista4=="µg") {
        operacion= valor2 * 1000000
        document.getElementById("resultado2").textContent= operacion+" µg"
    }

    if (lista3=="µg"&&lista4=="µg") {
        operacion= valor2 * 1
        document.getElementById("resultado2").textContent= operacion+" µg"
    } else if(lista3=="µg"&&lista4=="kg") {
        operacion= valor2 / 1000000000
        document.getElementById("resultado2").textContent= operacion+" kg"
    }else if(lista3=="µg"&&lista4=="t") {
        operacion= valor2 / 1000000000000
        document.getElementById("resultado2").textContent= operacion+" t"
    }else if(lista3=="µg"&&lista4=="hg") {
        operacion= valor2 / 100000000
        document.getElementById("resultado2").textContent= operacion+" hg"
    }else if(lista3=="µg"&&lista4=="l") {
        operacion= valor2 / 453600000
        document.getElementById("resultado2").textContent= operacion+" l"
    }else if(lista3=="µg"&&lista4=="g") {
        operacion= valor2 / 1000000
        document.getElementById("resultado2").textContent= operacion+" g"
    }
}

function convertir3() {
    let valor3=document.getElementById("valor3").valueAsNumber
    let lista5=document.getElementById("lista5").value
    let lista6=document.getElementById("lista6").value
    let operacion=0

    if (lista5=="s"&&lista6=="s") {
        operacion= valor3 * 1
        document.getElementById("resultado3").textContent= operacion+" s"
    } else if(lista5=="s"&&lista6=="min") {
        operacion= valor3 / 60
        document.getElementById("resultado3").textContent= operacion+" min" 
    }else if(lista5=="s"&&lista6=="h") {
        operacion= valor3 / 3600
        document.getElementById("resultado3").textContent= operacion+" h"
    }else if(lista5=="s"&&lista6=="dia") {
        operacion= valor3 / 86400
        document.getElementById("resultado3").textContent= operacion+" dia" 
    }

    if (lista5=="min"&&lista6=="min") {
        operacion= valor3 * 1
        document.getElementById("resultado3").textContent= operacion+" min"
    } else if(lista5=="min"&&lista6=="s") {
        operacion= valor3 * 60
        document.getElementById("resultado3").textContent= operacion+" s"
    }else if(lista5=="min"&&lista6=="h") {
        operacion= valor3 / 60
        document.getElementById("resultado3").textContent= operacion+" h"
    }else if(lista5=="min"&&lista6=="dia") {
        operacion= valor3 / 1440
        document.getElementById("resultado3").textContent= operacion+" dia" 
    }

    if (lista5=="h"&&lista6=="h") {
        operacion= valor3 * 1
        document.getElementById("resultado3").textContent= operacion+" h"
    } else if(lista5=="h"&&lista6=="min") {
        operacion= valor3 * 60
        document.getElementById("resultado3").textContent= operacion+" min"
    }else if(lista5=="h"&&lista6=="s") {
        operacion= valor3 * 3600
        document.getElementById("resultado3").textContent= operacion+" s"
    }else if(lista5=="h"&&lista6=="dia") {
        operacion= valor3 / 24
        document.getElementById("resultado3").textContent= operacion+" dia" 
    }
    
    
    
}