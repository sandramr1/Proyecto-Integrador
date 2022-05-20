const nombre=document.getElementById('name');
const email=document.getElementById('email');
const form=document.getElementById('form');
const numero=document.getElementById('numero');
const parrafo=document.getElementById('warnings');
form.addEventListener('submit',e=>{
    e.preventDefault();//Esta linea de codigo evita que se envie  por default,que se quede estatico
    let warnings=''//variable vacia para sobreescribir los warnings
    let entrar=false;
    let regexEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ //Exprecion regular para validar el email
    let regexName=/^[a-z ,.'-]+$/i
    let regexNumber=/^[0-9]+$/
    parrafo.innerHTML='';
    if(!regexName.test(nombre.value)||nombre.value==""){
        warnings+='El nombre esta mal escrito \t';
        
        entrar=true;
    }
    if(!regexEmail.test(email.value)||email.value==""){//en esta linea de codigo vamos a hacer un test del valor de nuestro email con nuestro regex
        warnings+='El email no es valido ';
        
        entrar=true;
    }
    if(!regexNumber.test(numero.value)||numero.value==""){//en esta linea de codigo vamos a hacer un test del valor de nuestro email con nuestro regex
        warnings+='El numero no es valido ';
       
        entrar=true;
    }
    if(entrar){
        parrafo.innerHTML=warnings;
    }else{
        localStorage.nombre = document.getElementById('nombre').value;
        localStorage.numero=document.getElementById('')
        parrafo.innerHTML='enviado';
    }

});
form.addEventListener('submit',e=>{
    e.preventDefault();
    
   
    });