var count = 0; //전역변수
    for(var i = 1; i <=  100; i++){
        
        if(i % 3 === 0){
            count += 1;
            document.write(i + ', ');
        }
        
        
    }
    
document.write("<p>3의 배수의 개수 : " + count + "</p>");