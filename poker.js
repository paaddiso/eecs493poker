var cheatingAllowed = false;
var pot = 0;
var cards = [];//array of all cards
var deck = [];
var cpuHand = [];
var playerHand = [];

function check(){
    alert("checks out ok");
}

function loadCards(){
    cards = [];//clear the array
    cards.push({name:"2 of Clubs", suit:"Clubs", value:2, flipped:false, imgpath:"images/2_of_clubs.png"});
    cards.push({name:"3 of Clubs", suit:"Clubs", value:3, flipped:false, imgpath:"images/3_of_clubs.png"});
    cards.push({name:"4 of Clubs", suit:"Clubs", value:4, flipped:false, imgpath:"images/4_of_clubs.png"});
    cards.push({name:"5 of Clubs", suit:"Clubs", value:5, flipped:false, imgpath:"images/5_of_clubs.png"});
    cards.push({name:"6 of Clubs", suit:"Clubs", value:6, flipped:false, imgpath:"images/6_of_clubs.png"});
    cards.push({name:"7 of Clubs", suit:"Clubs", value:7, flipped:false, imgpath:"images/7_of_clubs.png"});
    cards.push({name:"8 of Clubs", suit:"Clubs", value:8, flipped:false, imgpath:"images/8_of_clubs.png"});
    cards.push({name:"9 of Clubs", suit:"Clubs", value:9, flipped:false, imgpath:"images/9_of_clubs.png"});
    cards.push({name:"Jack of Clubs", suit:"Clubs", value:10, flipped:false, imgpath:"images/jack_of_clubs.png"});
    cards.push({name:"Queen of Clubs", suit:"Clubs", value:11, flipped:false, imgpath:"images/queen_of_clubs.png"});
    cards.push({name:"King of Clubs", suit:"Clubs", value:12, flipped:false, imgpath:"images/king_of_clubs.png"});
    cards.push({name:"Ace of Clubs", suit:"Clubs", value:13, flipped:false, imgpath:"images/ace_of_clubs.png"});

    cards.push({name:"2 of Diamonds", suit:"Diamonds", value:2, flipped:false, imgpath:"images/2_of_diamonds.png"});
    cards.push({name:"3 of Diamonds", suit:"Diamonds", value:3, flipped:false, imgpath:"images/3_of_diamonds.png"});
    cards.push({name:"4 of Diamonds", suit:"Diamonds", value:4, flipped:false, imgpath:"images/4_of_diamonds.png"});
    cards.push({name:"5 of Diamonds", suit:"Diamonds", value:5, flipped:false, imgpath:"images/5_of_diamonds.png"});
    cards.push({name:"6 of Diamonds", suit:"Diamonds", value:6, flipped:false, imgpath:"images/6_of_diamonds.png"});
    cards.push({name:"7 of Diamonds", suit:"Diamonds", value:7, flipped:false, imgpath:"images/7_of_diamonds.png"});
    cards.push({name:"8 of Diamonds", suit:"Diamonds", value:8, flipped:false, imgpath:"images/8_of_diamonds.png"});
    cards.push({name:"9 of Diamonds", suit:"Diamonds", value:9, flipped:false, imgpath:"images/9_of_diamonds.png"});
    cards.push({name:"Jack of Diamonds", suit:"Diamonds", value:10, flipped:false, imgpath:"images/jack_of_diamonds.png"});
    cards.push({name:"Queen of Diamonds", suit:"Diamonds", value:11, flipped:false, imgpath:"images/queen_of_diamonds.png"});
    cards.push({name:"King of Diamonds", suit:"Diamonds", value:12, flipped:false, imgpath:"images/king_of_diamonds.png"});
    cards.push({name:"Ace of Diamonds", suit:"Diamonds", value:13, flipped:false, imgpath:"images/ace_of_diamonds.png"});

    cards.push({name:"2 of Hearts", suit:"Hearts", value:2, flipped:false, imgpath:"images/2_of_hearts.png"});
    cards.push({name:"3 of Hearts", suit:"Hearts", value:3, flipped:false, imgpath:"images/3_of_hearts.png"});
    cards.push({name:"4 of Hearts", suit:"Hearts", value:4, flipped:false, imgpath:"images/4_of_hearts.png"});
    cards.push({name:"5 of Hearts", suit:"Hearts", value:5, flipped:false, imgpath:"images/5_of_hearts.png"});
    cards.push({name:"6 of Hearts", suit:"Hearts", value:6, flipped:false, imgpath:"images/6_of_hearts.png"});
    cards.push({name:"7 of Hearts", suit:"Hearts", value:7, flipped:false, imgpath:"images/7_of_hearts.png"});
    cards.push({name:"8 of Hearts", suit:"Hearts", value:8, flipped:false, imgpath:"images/8_of_hearts.png"});
    cards.push({name:"9 of Hearts", suit:"Hearts", value:9, flipped:false, imgpath:"images/9_of_hearts.png"});
    cards.push({name:"Jack of Hearts", suit:"Hearts", value:10, flipped:false, imgpath:"images/jack_of_hearts.png"});
    cards.push({name:"Queen of Hearts", suit:"Hearts", value:11, flipped:false, imgpath:"images/queen_of_hearts.png"});
    cards.push({name:"King of Hearts", suit:"Hearts", value:12, flipped:false, imgpath:"images/king_of_hearts.png"});
    cards.push({name:"Ace of Hearts", suit:"Hearts", value:13, flipped:false, imgpath:"images/ace_of_hearts.png"});

    cards.push({name:"2 of Spades", suit:"Spades", value:2, flipped:false, imgpath:"images/2_of_spades.png"});
    cards.push({name:"3 of Spades", suit:"Spades", value:3, flipped:false, imgpath:"images/3_of_spades.png"});
    cards.push({name:"4 of Spades", suit:"Spades", value:4, flipped:false, imgpath:"images/4_of_spades.png"});
    cards.push({name:"5 of Spades", suit:"Spades", value:5, flipped:false, imgpath:"images/5_of_spades.png"});
    cards.push({name:"6 of Spades", suit:"Spades", value:6, flipped:false, imgpath:"images/6_of_spades.png"});
    cards.push({name:"7 of Spades", suit:"Spades", value:7, flipped:false, imgpath:"images/7_of_spades.png"});
    cards.push({name:"8 of Spades", suit:"Spades", value:8, flipped:false, imgpath:"images/8_of_spades.png"});
    cards.push({name:"9 of Spades", suit:"Spades", value:9, flipped:false, imgpath:"images/9_of_spades.png"});
    cards.push({name:"Jack of Spades", suit:"Spades", value:10, flipped:false, imgpath:"images/jack_of_spades.png"});
    cards.push({name:"Queen of Spades", suit:"Spades", value:11, flipped:false, imgpath:"images/queen_of_spades.png"});
    cards.push({name:"King of Spades", suit:"Spades", value:12, flipped:false, imgpath:"images/king_of_spades.png"});
    cards.push({name:"Ace of Spades", suit:"Spades", value:13, flipped:false, imgpath:"images/ace_of_spades.png"});
}

function initDeck()
{
    for (var i = 0; i < 48; i++)
    {
        deck.push(i);
    }
}

function dealFiveEach()
{
    for (var i = 0; i < 10; i++)
    {
        var a = deck.pop();
        var b = deck.pop();
        cpuHand.push(a);
        playerHand.push(b);
    }
}

function updateUI()
{
    document.getElementById("hum_card1").src = cards[playerHand];
    for (var i = 1; i <= 5; i++)
    {
        var elementId = "hum_card".concat(i.toString());
        var cardNumber = playerHand[i];
        var sourceString = cards[cardNumber].imgpath;
        document.getElementById(elementId).src = sourceString;
    }
}

function initGame(){
    pot = 0;
    cheatingAllowed = false;
    document.getElementById("cheatbutton").innerHTML = "Turn Cheating On";
    loadCards();
    initDeck();
    dealFiveEach();
    updateUI();
    alert("a new game has begun!");
}

function toggleCheating(){
	if(cheatingAllowed == true)
	{
		cheatingAllowed = false;
		document.getElementById("cheatbutton").innerHTML = "Turn Cheating On";
	}
	else
	{
		cheatingAllowed = true;
		document.getElementById("cheatbutton").innerHTML = "Turn Cheating Off";
	}
}

function clickCard(x){
    alert(x);
}

function flipCard(elementId, cardNumber)
{
    var sourceString;
    if(cards[cardNumber].flipped == false)
    {
        sourceString = cards[cardNumber].imgpath;
        cards[cardNumber].flipped = true;
    }
    else
    {
        sourceString = "images/back.jpg";
        cards[cardNumber].flipped = false;
    }
    document.getElementById(elementId).src = sourceString;
}

function clickCpuCard(x){
    var elementId = "cpu_card".concat(x.toString());
    console.log("you clicked ".concat(elementId.toString()));
    var cardNumber = cpuHand[x];
    flipCard(elementId,cardNumber);
}





