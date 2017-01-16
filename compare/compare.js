/**
 * Created by Boaz on 16/01/2017.
 */
var prompt = require('prompt');

prompt.start();

var numbers = [
    {
        name: "firstNumber",
        description:"enter your first number"
    },
    {
        name: "secondNumber",
        description:"enter your second number"
    }
];

prompt.get(numbers,function (err,result) {
    if(err || !result || !result.firstNumber || !result.secondNumber ){

        console.error("ERROR: The was an errorin the code");
        return;
    }

    var firstNumber = parseInt(result.firstNumber, 10);
    var secondNumber = parseInt(result.secondNumber, 10);

    console.info("INFO: the result is : " + (firstNumber + secondNumber));

});

// here will  come the code for getting the numbers from the user

