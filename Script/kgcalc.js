// Funtion to convert Kg to Pounds and Update result
function Convert()
    {
        //get the value from the input and convert to float
        const kg = parseFloat(document.getElementById("kgInput").value);

        //check if the input is a valid number
        if(isNaN(kg) || kg <= 0)
        {
            document.getElementById("result").textContent = "Please enter a valid number greater then zero.";
            return; //exit if statmement
        }

        //convert kg to pound using (1kg = 2.20462)
        const pounds = kg * 2.20462;

        //update result paragraph with the convertion result, rounded to two decimal places
        document.getElementById("result").textContent = `${kg} kilograms is equal to ${pounds.toFixed(2)} pounds.`;
    }