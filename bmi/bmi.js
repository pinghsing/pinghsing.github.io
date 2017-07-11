function computeBMI() {
            var height = Number(document.getElementById("height").value);
            var weight = Number(document.getElementById("weight").value);
            var BMI = Math.round(weight / Math.pow(height, 2) * 10000);
            document.getElementById("output").innerText = Math.round(BMI * 100) / 100;
        }