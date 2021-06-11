var i=1;    
        var msg = prompt("출력 받을 자연수를 입력하세요 ex) '3'입력시 1,2,3 이 출력됨");
        if(msg !== null){
            
            while(true){
                document.write(i + "<br>");
                i += 1;
                if(i>msg){ //반복 조건문
                    break;
                }
            }
        }
        else{
            document.write("취소입니다.")
        }