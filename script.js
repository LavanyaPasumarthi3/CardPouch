/*function addCard(cardType, cardName, cardNumber, securityCode, expirationDate){
    const displayContainer = document.getElementById("addCard");
            const displayText = document.createElement("p");
            displayText.textContent = `Card Name: ${cardName}, card num: ${cardNumber}, card type:${cardType}
            \cvv:${securityCode}, exp data:${expirationDate}`;
            displayContainer.appendChild(displayText);
             document.getElementById('addCard').innerHTML='hey i have something';
}
window.addEventListener('storage', function (event) {
    if (event.key === 'cardName') {
        const cardName = localStorage.getItem('cardName');
        const cardNumber = localStorage.getItem('cardNumber');
        const cardType = localStorage.getItem('cardType');
        const securityCode = localStorage.getItem('securityCode');
        const expirationDate = localStorage.getItem('expirationDate');


        addCard(cardType, cardName, cardNumber, securityCode, expirationDate);
    }
});*/
function deleteCard1(cardId) {
    // Find the card with the specified id
    var cardToDelete = document.getElementById(cardId);

    // Remove the card from the DOM
    if (cardToDelete) {
      cardToDelete.parentNode.removeChild(cardToDelete);
    }
  }

function addCard(cardType, cardName, cardNumber, securityCode, expirationDate){
           /* const displayContainer = document.getElementById("addCard");
            const displayText = document.createElement("p");
            displayText.textContent = `Card Name: ${cardName}, card num: ${cardNumber}, card type:${cardType}
            \cvv:${securityCode}, exp data:${expirationDate}`;
            displayContainer.appendChild(displayText);
             document.getElementById('addCard').innerHTML=`${cardName}`;*/
             var cardTitle = cardName;
             var cardNumber = cardNumber.substring(0,4) + ' **** **** ****';
             var cardId = cardName+'ID';
           
             // Create card element dynamically
             var listItem = document.createElement('li');
             listItem.className = 'list-group-item';
             listItem.id = cardId;

             var cardDiv = document.createElement("div");
             cardDiv.className = "card text-center m-3 w-50";
           
             var cardHeaderDiv = document.createElement("div");
             cardHeaderDiv.className = "card-header";
             cardHeaderDiv.textContent = cardType === 'option1'? 'Debit Card': 'Credit Card';
           
             var cardBodyDiv = document.createElement("div");
             cardBodyDiv.className = "card-body";
           
             var titleElement = document.createElement("h5");
             titleElement.className = "card-title";
             titleElement.textContent = cardTitle;
           
             var cardNumberElement = document.createElement("p");
             cardNumberElement.className = "card-text";
             cardNumberElement.textContent = cardNumber;
           
             var viewCardLink = document.createElement("a");
             viewCardLink.href = "#";
             viewCardLink.className = "btn btn-primary";
             viewCardLink.textContent = "View card";

             var deleteCard = document.createElement("button");
             deleteCard.className = 'btn btn-danger';
             deleteCard.innerHTML = ' <i class="fa fa-trash"></i>';
             deleteCard.style.marginLeft = '4px';
             deleteCard.onclick = function () {
                deleteCard1(cardId);
              };
          
             // Append elements to the card body
             cardBodyDiv.appendChild(titleElement);
             cardBodyDiv.appendChild(cardNumberElement);
             cardBodyDiv.appendChild(viewCardLink);
             cardBodyDiv.appendChild(deleteCard);
           
             // Append elements to the main card div
             cardDiv.appendChild(cardHeaderDiv);
             cardDiv.appendChild(cardBodyDiv);
           
             // Append the card to the body or any other container in your HTML
             listItem.appendChild(cardDiv);
             const listGroup =  document.getElementById('listGroup');
             listGroup.appendChild(listItem);
}

window.addEventListener('storage', function (event) {
    if(event.key === 'cardName'){
        const cardName = localStorage.getItem('cardName');
        const cardNumber = localStorage.getItem('cardNumber');
        const cardType = localStorage.getItem('cardType');
        const securityCode = localStorage.getItem('securityCode');
        const expirationDate = localStorage.getItem('expirationDate');

        addCard(cardType, cardName, cardNumber, securityCode, expirationDate);
    }
});
        