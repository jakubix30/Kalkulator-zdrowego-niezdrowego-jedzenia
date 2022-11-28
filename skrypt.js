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
            document.getElementById('showdiv').style.display = "none";
            document.getElementById('showdiv').style.animationDuration = "1s";
            document.getElementById('showdiv').style.animationName = "animacja2";
            document.getElementById('showdiv').style.display = "block";
            document.getElementById('wynik').innerHTML= Math.round(formid1.ddlselect1.value / formid.ddlselect.value*10)/10
            document.getElementById('selectedzap1').innerHTML= formid4.input4.value;
            document.getElementById('musiszzjesczdrowe').innerHTML = (Math.round(formid4.input4.value / formid.ddlselect.value*10)/10);
            document.getElementById('musiszzjescniezdrowe').innerHTML = Math.round(formid4.input4.value / formid1.ddlselect1.value*10)/10;}
}

/*var li = 12.2352463745124353453
var rounded = Math.round(li*10) / 10
document.write(rounded); */
