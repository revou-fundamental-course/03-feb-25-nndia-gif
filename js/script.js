// TEMPERATURE CONVERSION PROGRAM

function convert(event){
    event.preventDefault();

    var inputValue = parseFloat(document.getElementById("main-input").value);
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;
    var result = 0;
    // var mainResult = document.getElementById("main-result").value;
    var formula = " ";

    // Konversi Celcius
    if (inputUnit === "Celcius"){
        // Konversi Celcius ke Fahrenheit
        if (outputUnit === "Fahrenheit"){
            result = (inputValue * 9/5) + 32 + "\u00B0F";
            formula = "(" + inputValue + "\u00B0C * 9/5) + 32";
        // Konversi Celcius ke Kelvin
        } else if (outputUnit === "Kelvin"){
            result = inputValue + 273.15 + "\u00B0K";
            formula = inputValue + "\u00B0C + 273.15";
        }
    // Konversi Fahrenheit
    } else if (inputUnit === "Fahrenheit"){
        // Konversi Fahrenheit Celcius
        if (outputUnit === "Celcius"){
            result = (inputValue - 32) * 5/9 + "\u00B0C";
            formula = "(" + inputValue + "\u00B0F - 32) * 5/9";
        // Konversi Fahrenheit ke Kelvin
        } else if (outputUnit === "Kelvin"){
            result = (inputValue - 32) * 5/9 + 273.15 + "\u00B0K";
            formula = "("S + inputValue + "\u00B0F - 32) * 5/9 + 273.15";
        }
    // Konversi Kelvin
    } else if (inputUnit === "Kelvin"){
        // Konversi Kelvin ke Celcius
        if (outputUnit === "Celcius"){
            result = inputValue - 273.15 + "\u00B0C";
            formula = inputValue + "\u00B0K - 273.15";
        // Konversi Kelvin ke Fahrenheit
        } else if (outputUnit === "Fahrenheit"){
            result = (inputValue - 273.15) * 9/5 + 32 + "\u00B0F";
            formula = "(" + inputValue + "\u00B0K - 273.15) * 9/5 + 32";
        }
    }

    document.getElementById("main-result").value = result;
    document.getElementById("how-result").value = formula;