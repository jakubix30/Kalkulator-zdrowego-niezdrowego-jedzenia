function getddl()
{
    document.getElementById('lblmess').innerHTML=("Wybrana opcja to: "+formid.ddlselect[formid.ddlselect.selectedIndex].text)
}
/*ZDROWE*/

function getddl1()
{
    document.getElementById('lblmess1').innerHTML=("Wybrana opcja to: "+formid1.ddlselect1[formid1.ddlselect1.selectedIndex].text)
}
/*NIEZDROWE*/

function obliczanie()
{
    if (formid1.ddlselect1.value=="wybieranie" || formid.ddlselect.value=="wybieranie") {
        alert("BŁĄD, najpierw wybierz produkty")}
        else{
            document.getElementById('showdiv').style.display = "block";
            document.getElementById('wynik').innerHTML=
            ("Musisz zjesc  "+(Math.round(formid1.ddlselect1.value / formid.ddlselect.value*10)/10) + " wybranego zdrowego produktu aby zastąpić wybranego niezdrowego.")}
}

/*var li = 12.2352463745124353453
var rounded = Math.round(li*10) / 10
document.write(rounded); */
