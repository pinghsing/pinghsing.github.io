function TXO() {
            var price=Number(document.getElementById("price").value);
            var amount=Number(document.getElementById("amount").value);
            var fee=Number(document.getElementById("fee").value);
            var contract=Number(document.getElementById("contract").value);
            var e = document.getElementById("cp");
            var cp=Number(e.options[e.selectedIndex].value);
            var strike=Number(document.getElementById("strike").value);
            var cost=price*50*amount;
            var buyfee=fee*amount;
            var clearfee=fee*amount;
            var tax=strike*50*amount*0.00002;
            var income=(strike-contract)*cp*50*amount;
            if(income<0)
                {
                    income=0;
                    tax=0;
                    clearfee=0;
                }
            var revenue=income-cost;
            document.getElementById("cost").innerText=cost;
            document.getElementById("buyfee").innerText=buyfee;
            document.getElementById("income").innerText=income;
            document.getElementById("clearfee").innerText=clearfee;
            document.getElementById("tax").innerText=tax;
            document.getElementById("revenue").innerText=revenue;
        }