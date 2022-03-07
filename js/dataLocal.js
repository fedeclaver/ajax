

function appendObjectToLocalStorage(obj,nombre) {
 
    localStorage.setItem(nombre, JSON.stringify(obj));

}



function loadFromLocalStorage(nombre) {
    let objets = [],
        data = localStorage.getItem(nombre);
      

    if (data !== null) {
        objets = JSON.parse(data);
    }
      
    return objets
}

function removeFromLocalStorage(nombre){
    localStorage.removeItem(nombre);

}
