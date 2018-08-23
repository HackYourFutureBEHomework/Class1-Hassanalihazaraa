// Your custom scraping script.


document.addEventListener("keypress", function() {
    let table = document.querySelector("table.cast_list");
    let rows = table.querySelectorAll("tr.odd, tr.even");
    console.clear()
    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        let actor = row.querySelector("[itemprop=actor] a span").innerHTML;
        let characterTag = row.querySelector("td.character");
    let character;
    let a = characterTag.querySelector("a");
    if (a != null) {
        character = a.innerHTML;
    } else {
        character = characterTag.innerHTML;
    }
    console.log("Actor: " + actor.trim() + ", Character: " + character.trim());
}
});


// Look at https://github.com/HackYourFutureBelgium/JavaScript2/tree/master/Projects/web-scraper
// for the version we showed in class.

