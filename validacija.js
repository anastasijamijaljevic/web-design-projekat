function proveriemail ()
{
var test=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var tekst=document.forma.izraz.value;
alert(tekst);
var rezultat = tekst.match(test);
if (rezultat != null)
alert("Hvala na ukazanom poverenju!")
else alert("Molimo unesite podatke!");

}

function proveriime () {
   var name= document.getElementById('name').value;
   if (name.length===0){
   alert ('Molimo da unesete ime i prezime!');
   return false;
   }
   else {
    (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) 
        alert ('Molimo da unesete ime i prezime');
        return false;
    }
   


}

function proveriporuku () {
    var message=document.getElementById('subject').value;
    var required=30;
    var left=required-message.length;

    if (left>0) {
        alert ('Molimo unesite ispravnu poruku');
        return false;
    }

    else {
        alert ('Hvala na ukazanom poverenju');
        return true;
    }
}

function validateForm () {
    if (!proveriemail() || !proveriime() || !proveriporuku()) {
        alert('Molimo unesite podatke ispravno');
        return false;
    }
    else{
        alert ('Hvala na ukazanom poverenju');
        return true;
    }
}