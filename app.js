let again = true;
// Practica de if Else de JavaScript
/*
    Primer Challenge
*/
alert('Primer Challenge');
do{
    let num = 1;
    try{
        while(num <= 10){
            alert(num);
            num++;
        }
    }catch(e){
        alert('Error');
        again = false;
    } 


   
   let ask = prompt("Desea ejecutar el primer Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Segundo Challenge
*/


alert('Segundo Challenge');
do{
    num = 10;
    try{
        while(num >= 0){
            alert(num);
            num--;
        }
       }catch(e){
        alert('Error');
        again = false;
       } 
    
     
   let ask = prompt("Desea ejecutar el Segundo Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Tercer Challenge
*/


alert('Tercer Challenge');
do{
    num = 0;
    try{
        let numImput = prompt("Introduzca un valor para realizar una cuenta progresiva");
        while(num <= numImput){
            console.log(num);
            num++;
        }
       }catch(e){
        alert('Error');
        again = false;
       } 
    
     
   let ask = prompt("Desea ejecutar el Tercer Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);


/*
    Cuarto Challenge
*/


alert('Cuarto Challenge');
do{
    num = 0;
    try{
        let numImput = prompt("Introduzca un valor para realizar una cuenta regresiva");
        while(num <= numImput){
            console.log(numImput);
            numImput--;
        }
       }catch(e){
        alert('Error');
        again = false;
       } 
     
   let ask = prompt("Desea ejecutar el Cuarto Challenge nuevamente? Y/N");
   if(ask == "Y" | ask == "y"){
    again = true;
   }else if(ask =="N" | ask == "n"){
    again = false;
   }
}while(again == true);