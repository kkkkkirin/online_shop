'use strict';

var requestURL = 'http://127.0.0.1:5500/database/goods.json'
var request = new XMLHttpRequest()
request.open('GET', requestURL)
request.responseType = 'json'
request.send()

request.onload = function() {
    var goods = request.response
    console.dir(goods)
    showCards(goods)
}

function showCards(jsonObj) {
    var card = jsonObj['Goods']
    console.dir(card)

    var row_of_goods = document.querySelector(".row.no-gutters.goods")

    for(var i = 0; i<card.length; i++){
        var mainCard = document.createElement("div")
        mainCard.setAttribute("class", "col-12 col-md-6 col-lg-4 col-xl-3")

        var cardGood = document.createElement("div")
        cardGood.setAttribute("class", "cardGood")

        var cardPict = document.createElement("div")
        cardPict.setAttribute("class", "cardPict")
        var cardPictTop = document.createElement("div")
        cardPictTop.setAttribute("class", "cardPictTop")

        var cardBrand = document.createElement("div")
        cardBrand.setAttribute("class", "cardBrand")
        var cardName = document.createElement("div")
        cardName.setAttribute("class", "cardName")
        var cardSeries = document.createElement("div")
        cardSeries.setAttribute("class", "cardSeries")
        var cardSeriesNumber = document.createElement("div")
        cardSeriesNumber.setAttribute("class", "cardSeriesNumber")
        var cardCategory = document.createElement("div")
        cardCategory.setAttribute("class", "cardCategory")
        var cardColor = document.createElement("div")
        cardColor.setAttribute("class", "cardColor")
        var btnPrimary = document.createElement("button")
        btnPrimary.setAttribute("class", "btn btn-primary")

        cardBrand.textContent = card[i].Brand
        cardName.textContent = card[i].Name 
        cardCategory.textContent = card[i].Category 
        cardSeries.textContent = card[i].Series 
        cardSeriesNumber.textContent = card[i].SeriesNumber 
        cardPict.style.backgroundImage = "url(" + card[i].url + ")" 
        btnPrimary.textContent = "В корзину"

        var exp = document.createElement("div")
        exp.setAttribute("class", "exp")
        exp.textContent = card[i].Category + " " + card[i].Brand + " " + 
        card[i].Name + " " + card[i].Series + " " + card[i].Series_Number + " " + 
        card[i].Color 

        cardGood.appendChild(exp)
        cardGood.appendChild(btnPrimary)
        /*cardGood.appendChild(cardCategory)
        cardGood.appendChild(cardBrand)
        cardGood.appendChild(cardName)
        cardGood.appendChild(cardSeries)
        cardGood.appendChild(cardSeriesNumber)*/

        mainCard.appendChild(cardPict)
        mainCard.appendChild(cardGood)

        row_of_goods.appendChild(mainCard)
    }
}