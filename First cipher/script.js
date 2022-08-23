const alpha = 'abcdefghijklmnopqrstuvwxyz';

function enc(){
    let text = document.getElementById('text').value.toLowerCase(); 
    let a = '';
    let b = '';
    for(h=0; h < text.length; h++){
        if(h%2 == 0){
        a += text[h];
        }
        else{
            b += text[h];
        }
    }
    encrypted = a+b;
    document.getElementById('result').value = encrypted;
    // console.log(a);
    // console.log(b);
}

function dec(){
    decrypted = '';
    for(h=0 ; h < encrypted.length ; h++){
        x = encrypted.slice(0, (h/2)+1);
        y = encrypted.slice((h/2)+1 , encrypted.length);
    }
    for(i=0 ; i< x.length && i<y.length; i++){
        if(x.length > y.length){
            y = y + ' ';
            decrypted = decrypted + (x[i] + y[i]) ;
        }
        else{
            decrypted = decrypted + (x[i] + y[i]);
        }
    }
    // console.log(decrypted);
    document.getElementById('result').value = decrypted; 
}

