

function analizaPalabras(lista) {
  lista.forEach((lista, indice) => {
    console.log(`palabra ${indice + 1}: ${lista}`);
    console.log(`N ${lista.length}`);
    let guion = lista.charAt(0);
    for(const u of lista.slice(1)){guion +=`-${u}`};
    console.log(guion);
    let par = false;
    let mayuscula = false;
    if(lista.length %2 === 0){
        par = true;
    }
    if(lista.charAt(0) === lista.charAt(0).toUpperCase()){
      mayuscula = true;
    }
    if(par === true && mayuscula === true){
        console.log("La palabra es par y su primera letra es mayuscula")
    } else  if(par === true && mayuscula !== true){
        console.log("La palabra es par y su primera letra no es mayuscula")
    } else  if(par !== true && mayuscula === true){
        console.log("La palabra no es par y su primera letra es mayuscula")
    } else{
        console.log("La palabra no es par y su primera letra no es mayuscula")
    }
    if(lista.indexOf("ble") >= 0){ console.log("La palabra contiene ble");
       } else {console.log("La palabra no contiene ble")}
   
  });
}
analizaPalabras(array);
