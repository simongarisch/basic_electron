
let request = require("request");


function refreshQuote(){
    // https://quotesondesign.com/api-v4-0/
    let url = "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

    request(url, function(err, response, body){
        let bodyJson = JSON.parse(body);
        console.log("bodyJson...")
        console.log(bodyJson);
        console.log("...");
    
        let randomQuote = bodyJson[0]["content"];
        console.log(randomQuote);
    
        document.getElementById("quote").innerHTML = randomQuote;
    })
}

// update the quote
refreshQuote();

// then continue updating every 5 seconds
setInterval(refreshQuote, 5000);
