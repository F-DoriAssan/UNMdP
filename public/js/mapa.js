//La variable offices es enlazada atravez del scrip de ubicacion.html por eso la uso 

let map;
let markers = [];

const setListener = ()=>{  //funcion que al hacer click en el nombre me muestre los datos del objeto
    document.querySelectorAll(".office__individualNames").forEach((officeName, index)=>{ //obtenemos el elemento y su indice
        officeName.addEventListener("click", ()=>{
            google.maps.event.trigger(markers[index], "click")
        })
    })   
}

const displayOfficeList = () =>{ //pongo en el div de sucursales_nombres para que aparezcan el nombre de cada office
let officeHTML="";
offices.forEach(office=>{
    officeHTML += `<h4 class="office__individualNames">${office.name}</h4>`
})
document.getElementById("nameSeanson").innerHTML = officeHTML;
}

const creaMarcador = (coord,name, address, bicycle) =>{ //instacia del marcador datos de cada sucursal
    let html = `
        <div class="window">
            <h2>${name}</h2>
            <div class="address">
                <i class="fas fa-map-marker-alt fa-lg"></i>
                <h3>${address}</h3>
            </div>
            <div class="bicycle">
                <i class="fas fa-bicycle"></i>
                <h3>${bicycle}</h3>
        </div>
         </div>
    ` //Datos de los objeto del array para mostrar
    const marker = new google.maps.Marker({  //Realizo el posicionamiento del marcador con la funcion crea marcador que me trae la cordenada y el nombre de datosMapa.jv
        position: coord,
        map:map,
        icon: "/images/Ecobici_logo.png" //Cambio el icono del marcador
    })
    google.maps.event.addListener(marker, "click", ()=>{ //Traigo el infowindows al evento click
        infoWindow.setContent(html);
        infoWindow.open(map,marker)
    })
    markers.push(marker)
}


const creaMarcadorLocalizacion = ()=>{ //Localiza el marcador
    let bounds = new google.maps.LatLngBounds(); //el bouunds me ayuda a ajustar el zoom cuando agrego una office mas lejana
    offices.forEach(office=>{ ////traigo de offices la cordenada
        let coord = new google.maps.LatLng(office.lat,office.lng);
        let name = office.name;
        let address = office.address;
        let bicycle = office.bicycle;
        bounds.extend(coord)
        creaMarcador(coord, name, address, bicycle);
        map.fitBounds(bounds); //metodo que obtiene las coordenadas atravez del bounds y el fitBounds amplia el zoom
    })
}


function initMap(){
    let bsas = {lat: -34.603159, lng: -58.381608} //Inicializo ubicacion central
    map = new google.maps.Map(document.getElementById("map"),{ //instacia
        center: bsas,
        zoom: 14,
        mapId: "f546a465f7f192b1", //Le doy estilo al mapa le saco todos los iconos
    })
    creaMarcadorLocalizacion();
    infoWindow = new google.maps.InfoWindow(); //creo el info windows 
    displayOfficeList()
    setListener();
}