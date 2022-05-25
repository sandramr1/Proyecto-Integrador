

const precio=document.getElementById('precio');
const parrafo=document.getElementById('warnings');
const form=document.getElementById('form');

form.addEventListener('submit',e=>{
    e.preventDefault();//Esta linea de codigo evita que se envie  por default,que se quede estatico
    let warnings=''//variable vacia para sobreescribir los warnings
   
    
    let precio=/^[a-z ,.'-]+$/i
    
    parrafo.innerHTML='';
    if(!regexprecio.test(precio.value)||precio.value==""){
        warnings+='Introduzca un precio valido';
        let entrar=false;

        entrar=true;
    }
})


//Validacion de la opcion seleccionada en el input radios
/*
//!Seccion tipo de contrato:



const radioButtons = document.querySelectorAll('input[name="contrato "]');
btn.addEventListener("click", () => {
    let opcionSelected1;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            opcionSelected1 = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = opcionSelected1 ? `You selected ${opcionSelected1}` : `You haven't selected any option`;
});

*/
//!Seccion tipo de cancelacion

const btn = document.querySelector('#btn');
const radioButtons = document.querySelectorAll('input[name="cancelacion"]');
btn.addEventListener("click", () => {
    let opcionSelected;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            opcionSelected = radioButton.value;
            break;
        }
    }
    // show the output:
    output.innerText = opcionSelected ? `You selected ${opcionSelected}` : `You haven't selected any option`;
});

//?validar campos requeridos
/*
   if (!nombreUsario || nombreUsario ==""){
        alert("Por favor captura el nombre de usuario");
        error = true;
    }
    var nuevoUsario={//Aqui se crea el objeto 
        name:nombreUsario,
        email:emailUsuario,
        number:numeroUsuario,
        comentarios:comentariosusuario
    };
    console.log(nuevoUsario);
    if (!error){
        
    }else{
        
    }
    */