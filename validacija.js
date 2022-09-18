function proveri()
{
var test=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var tekst=document.forma.izraz.value;
alert(tekst);
var rezultat = tekst.match(test);
if (rezultat != null)
alert("Hvala na ukazanom poverenju!")
else alert("Molimo unesite podatke!");

var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
var name = document.getElementById('name').value;
if(!regName.test(name)){
    alert('Molimo unesite vaše puno ime.');
    document.getElementById('name').focus();
    return false;
}else{
    alert('Hvala vam.');
    return true;

}


}
