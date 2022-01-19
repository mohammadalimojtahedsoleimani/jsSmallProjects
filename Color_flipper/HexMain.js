const hex = [ 0 , 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , "A" , "B" , "C" , "D" , "E" , "F" ];
const btn = document.getElementById ( "btn" );
const color = document.querySelector ( ".color" );

btn.addEventListener ( "click" , clickHandler );



function clickHandler () {
    let rang = "#"
    for ( let i = 0 ; i < 6 ; i ++ ) {
        rang += hex[randomCHeck()];
    }

    document.body.style.backgroundColor = rang;
    color.textContent = rang;
}

function randomCHeck () {
    return Math.floor ( Math.random () * hex.length )
}