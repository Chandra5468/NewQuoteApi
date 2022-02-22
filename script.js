const quoteContainer = document.getElementById("quote-container")
const quoteText = document.getElementById("quote")
const authorText = document.getElementById("author")
const newQuoteBtn = document.getElementById("new-quote")
const loader = document.getElementById("loader")

let apiQuotes = []

function showLoadingSpinner(){
    loader.hidden = false;
    quoteContainer.hidden = true
}

function removeLoadingSpinner(){
    quoteContainer.hidden = false
    loader.hidden = true
}

async function getQuote(){
    showLoadingSpinner()
    removeLoadingSpinner()
    const apiUrl = "https://type.fit/api/quotes"

    try{
    const response = await fetch(apiUrl)
    apiQuotes = await response.json()

    newQuote()
    }catch(error){
        console.log(error)
    }
}

function newQuote(){

    showLoadingSpinner()

    setTimeout(()=>{
        const quote = apiQuotes[Math.floor(Math.random()*apiQuotes.length)]
    
        if(!quote.author){
            authorText.textContent = 'Unknown'
    
        }else{
            authorText.textContent = quote.author
        }
    
        quoteText.textContent = quote.text
        removeLoadingSpinner()
    },1000)
    
}
getQuote();

newQuoteBtn.addEventListener("click",newQuote)