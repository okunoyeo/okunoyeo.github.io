'use strict';
    //const target = document.getElementById('outputDiv');
    let output = ''; //output is nothing at the start

   // target.innerHTML = ''; //clear the field before starting 
   //not needed b/c not in html doc

    for (let i = 1; i <= 100; i++){
        if ((i % 3 == 0) && (i % 5 == 0)){
            output = 'Fizzbuzz';
        }
        if (i % 3 == 0){
            output = 'Fizz';
        }else if(i % 5 == 0){
            output = 'Buzz';
        }else{
            output = i;
        }
        console.log(output);
        //target.innerHTML += output + '<br>';
    }
