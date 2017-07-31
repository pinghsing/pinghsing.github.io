function eCPM() {
            var ctr = Number(document.getElementById("ctr").value);
            var cpc = Number(document.getElementById("cpc").value);
            var ecpm = 10*ctr*cpc;
            document.getElementById("ecpm").innerText = ecpm;
        }