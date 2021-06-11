var age = prompt("나이를 입력하세요","1");
    if(age !== null){
            
        
        //var age = 14;
        
        if(age >= 15){
            document.write("드라마 관람가<br>");
        }
        else{
            document.write("드라마 관람불가<br>");
        }
        document.write("나이는 " + age + "세 입니다.");
    }
    else{
            document.write("취소");
    }