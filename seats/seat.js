var customer = prompt("입장객은 몇 명인가요?");
var colNum = prompt("한 줄에 몇 명씩 앉나요?");
var rowNum;

if(customer % colNum === 0){
    rowNum = parseInt(customer / colNum);
}
else{
    rowNum = parseInt(customer / colNum) +1;
}

document.write("<table>");
for(var i=0; i<rowNum; i++){
    document.write("<tr>");
    for(var j=1; j<=colNum; j++){

        var seatNum = i * colNum + j;
        if(seatNum <= customer){
            document.write("<td>좌석" + seatNum + "</td>");
        }
    }
    document.write("</tr>");
}
document.write("</table>")