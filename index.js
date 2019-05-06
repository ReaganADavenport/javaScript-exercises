//Exercise 1
function hello(name){
    console.log(`Hello ${name}`);
  }
  
  //hello('Mustache');
  
  
  //Exercise 2
  
  function madlib(name, subject){
    console.log(`${name}'s favorite school subject is ${subject}`);
  }
  //madlib('Anushka', 'art');
  

//Exercise 3

function tipAmount(bill, service){
    if (service === 'good'){
      console.log(bill * 0.2);
    } else if (service === 'fair'){
      console.log(bill*0.15);
    } else if (service === 'bad'){
      console.log(bill*0.1);
    }
  }

//tipAmount(100, 'good');


  //Exercise 4
  
  function tipAmount(bill, service){
    if (service === 'good'){
      console.log(bill+(bill * 0.2) );
    } else if (service === 'fair'){
      console.log(bill + (bill*0.15) );
    } else if (service === 'bad'){
      console.log(bill + (bill*0.1) );
    }
  }
  
  //tipAmount(100, 'bad');


//Exercise 5

function tipAmount(bill, service, split){
    if (service === 'good'){
      console.log((bill+bill * 0.2) / split );
    } else if (service === 'fair'){
      console.log((bill+bill * 0.15) / split );
    } else if (service === 'bad'){
      console.log((bill+bill * 0.1) / split );
    }
  }

//tipAmount(100, 'good', 5);