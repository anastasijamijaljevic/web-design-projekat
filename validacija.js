function proveri()
{
var test=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var tekst=document.forma.izraz.value;
alert(tekst);
var rezultat = tekst.match(test);
if (rezultat != null)
alert("Hvala na ukazanom poverenju!")
else alert("Molimo unesite podatke!");
}