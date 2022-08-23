const alpha = ' abcdefghijklmnopqrstuvwxyz';

function enc(){
    const text = document.getElementById('text').value.toLowerCase(); // zydan
    encrypted = '';
    for(h=0; h < text.length; h++){
        i = alpha.indexOf(text[h]);
        i = (i + 3) % 26;
        encrypted += alpha[i];
    }
    document.getElementById('result').value = encrypted;
}
function dec(){
    decrypted = ' ';
    for(j=0 ; j< encrypted.length ;j++){
        x = alpha.indexOf(encrypted[j]);
        if (x-3 <=0){
            x += 26;
        }
        x = (x-3) %26;
        decrypted += alpha[x];
    }
    document.getElementById('result').value = decrypted;

}