let tab;
tab = "<table border='1' width='500' cellspacing='0' cellpadding='3'>";
for (i=1;i<=10;i++) {
    tab = tab +"<tr>";
    for (j=1;j<=10;j++) {
        tab += "<td>" + i*j + "</td>";
    }
    tab+="</tr>";
}
tab +="</table>";
document.write(tab);