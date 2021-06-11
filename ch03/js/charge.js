var age = prompt("나이를 입력하세요 ex)17","8");
var charge;
var grade;
if(age !== null){
    if(age<8){
                    charge = 1000;
                    grade = "미취학아동";
                
    }
    else if(age>=8 && age<14){
                
                    charge = 2000;
                    grade = "초등학생";
    }
    else if(age>=14 && age<20){
                
                    charge = 2500;
                    grade = "중,고등학생";
    }
    else{
                
                    charge = 3000;
                    grade = "성인";
    }
                document.write("<span class='accent2'>" + grade + "</span>입니다.<br>");
                document.write("입장료는 <span class='accent'>" + charge + "</span>원입니다.");
        }
else{
            document.write("입력이 취소되었습니다.");
        }
        