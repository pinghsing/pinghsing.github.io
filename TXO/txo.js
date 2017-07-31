function TXO() {
            var price=Number(document.getElementById("price").value);
            var amount=Number(document.getElementById("amount").value);
            var contract=Number(document.getElementById("contract").value);
            var e = document.getElementById("cp");
            var cp=e.options[e.selectedIndex].value;
            var cp=Number(document.getElementById("strike").value);
            var cost=price*50*amount;
            var income=(strike-contract)*cp*50*amount;
            if(income<0)income=0;
            var revenue=income-cost;
            document.getElementById("txo").innerText = revenue;
        }