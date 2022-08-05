function encriptar(){
    let textoOriginal=document.getElementById("textoOriginal").value;
    console.log("Texto Antes: "+textoOriginal);
    let newText=textoOriginal.split('');
    for (let i= 0;i<textoOriginal.length;i++){
        if (newText[i] === 'a'){
            newText[i]=newText[i].replace('a','ai');
        }
        else if (newText[i] === 'e'){
            newText[i]=newText[i].replace('e','enter');
        }else if (newText[i] === 'i'){
            newText[i]=newText[i].replace('i','imes');
        }else if (newText[i] === 'o'){
            newText[i]=newText[i].replace('o','ober');
        }else if (newText[i] === 'u'){
            newText[i]=newText[i].replace('u','ufat');
        }
    }
   
    newText=newText.join("");
    console.log("Texto Despues: "+newText);
    document.getElementById("textoModificado").innerHTML=newText;
}

function desencriptar(){
    let textoOriginal=document.getElementById("textoOriginal").value;
    console.log("Texto Antes: "+textoOriginal);
    let newText=textoOriginal;
    newText=newText.replaceAll('ai','a');
    newText=newText.replaceAll('enter','e');
    newText=newText.replaceAll('imes','i');
    newText=newText.replaceAll('ober','o');
    newText=newText.replaceAll('ufat','u');
    console.log("Texto Despues: "+newText);
    document.getElementById("textoModificado").innerHTML=newText;
}

function copiar(){
    let input=document.getElementById("textoModificado");
    input.select();
    input.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(input.value);
  
}