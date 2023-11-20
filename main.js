const dom = document.addEventListener("DOMContentLoaded", ()=>{
    document.querySelector("#currency-converter").addEventListener("submit",async(event)=>{
        event.preventDefault();
        console.log("async funtcion call first")

        const{target:{from, to, amount}} = event;

        var headers = new Headers();
        headers.append("apikey", "z1NmHTZxvLWABZ1GHGPQ9Cu2oRO1Mlkj");

        const requestOptions = {
            method: "GET", //PUT (update data yang sudah ada), POST (menyimpan ke database), DELETE (untuk menghapus)
            headers, 
        }

        //fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
        // .then(response=>response.json())
        // .then(data=>{
        //     // {
        //     //     "success": true,
        //     //     "query": {
        //     //         "from": "EUR",
        //     //         "to": "IDR",
        //     //         "amount": 5
        //     //     },
        //     //     "info": {
        //     //         "timestamp": 1700190063,
        //     //         "rate": 16811.320447
        //     //     },
        //     //     "date": "2023-11-17",
        //     //     "result": 84056.602235
        //     // }
        //     let {info,date,query:{to}, result} = data;
            // document.querySelector(".result").textContent = `As per the exchange rate: ${info.rate} for ${date}=> converted value in ${to} is ${result}`;
        // })
        // .catch(error => console.log(error));

        try{
            let response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${to.value}&from=${from.value}&amount=${amount.valueAsNumber}`, requestOptions)
            const data = await response.json();
            // console.log(data);
            let {info,date,query:{to: convertedTo}, result} = data;
            document.querySelector(".result").textContent = `As per the exchange rate: ${info.rate} for ${date}=> converted value in ${to} is ${result}`;
        }catch(error){
            console.log(error)
        }finally{
            console.log("Finally block")
        }

    })


    document.querySelector("#currency-converter").addEventListener("submit",async(event)=>{
        console.log("a regular synchronous function");
    })

})