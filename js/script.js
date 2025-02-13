// TEMPERATURE CONVERSION PROGRAM

function convert(){
    // event.preventDefault();

    var inputValue = parseFloat(document.getElementById("main-input").value);
    var inputUnit = document.getElementById("input-unit").value;
    var outputUnit = document.getElementById("output-unit").value;
    
    //Pilihan konversi suhu tidak boleh sama
    if (inputUnit === outputUnit){
        alert("Pilihlah Konversi Suhu yang berbeda!");
        return;
    }

    //Nilai input suhu tidak boleh kosong
    if (isNaN(inputValue)){
        alert("Masukkan angka yang valid!");
        return;
    }

    var result = 0;
    var formula = " ";

    // Konversi Celcius
    if (inputUnit === "Celcius"){
        // Konversi Celcius ke Reamur
        if (outputUnit === "Reamur"){
            result = inputValue * 4/5 + "\u00B0R";
            formula = inputValue + "\u00B0C * 4/5";
        // Konversi Celcius ke Fahrenheit
        } else if (outputUnit === "Fahrenheit"){
            result = (inputValue * 9/5) + 32 + "\u00B0F";
            formula = "(" + inputValue + "\u00B0C * 9/5) + 32";
        // Konversi Celcius ke Kelvin
        } else if (outputUnit === "Kelvin"){
            result = inputValue + 273.15 + "\u00B0K";
            formula = inputValue + "\u00B0C + 273.15";
        }

    // Konversi Reamur
    } else if (inputUnit === "Reamur"){
        // Konversi Reamur ke Celcius
        if (outputUnit === "Celcius"){
            result = inputValue * 5/4 + "\u00B0C";
            formula = inputValue + "\u00B0R * 5/4";
        // Konversi Reamur ke Fahrenheit
        } else if (outputUnit === "Fahrenheit"){
            result = inputValue * 9/4 + 32 + "\u00B0F";
            formula = inputValue + "\u00B0R * 9/4 + 32";
        // Konversi Reamur ke Kelvin
        } else if (outputUnit === "Kelvin"){
            result = inputValue * 5/4 + 273.15 + "\u00B0K";
            formula = inputValue + "\u00B0R * 5/4 + 273.15";
        }

    // Konversi Fahrenheit
    } else if (inputUnit === "Fahrenheit"){
        // Konversi Fahrenheit Celcius
        if (outputUnit === "Reamur"){
            result = (inputValue - 32) * 4/9 + "\u00B0R";
            formula = "(" + inputValue + "\u00B0F - 32) * 4/9";
        // Konversi Fahrenheit ke Celcius
        } else if (outputUnit === "Celcius"){
            result = (inputValue - 32) * 5/9 + "\u00B0C";
            formula = "(" + inputValue + "\u00B0F - 32) * 5/9";
        // Konversi Fahrenheit ke Kelvin
        } else if (outputUnit === "Kelvin"){
            result = (inputValue - 32) * 5/9 + 273.15 + "\u00B0K";
            formula = "(" + inputValue + "\u00B0F - 32) * 5/9 + 273.15";
        }
        
    // Konversi Kelvin
    } else if (inputUnit === "Kelvin"){
        // Konversi Kelvin ke Reamur
        if (outputUnit === "Reamur"){
            result = (inputValue - 273.15) * 4/5 + "\u00B0R";
            formula = "(" + inputValue + "\u00B0K - 273.15) * 4/5"; 
        // Konversi Kelvin ke Celcius
        } else if (outputUnit === "Celcius"){
            result = inputValue - 273.15 + "\u00B0C";
            formula = inputValue + "\u00B0K - 273.15";
        // Konversi Kelvin ke Fahrenheit
        } else if (outputUnit === "Fahrenheit"){
            result = (inputValue - 273.15) * 9/5 + 32 + "\u00B0F";
            formula = "(" + inputValue + "\u00B0K - 273.15) * 9/5 + 32";
        }
    }
    //Menampilkan hasil di page yang sama
    document.getElementById("main-result").value = result;
    //Menampilkan rumus di page yang sama
    document.getElementById("how-result").value = formula;
}
