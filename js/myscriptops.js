"use strict";


function dialog(hoejde, bredde, baggrundsfarve, fontfarve, placering, indhold, knapper) {

    const htmlkrop = document.body;
    htmlkrop.insertAdjacentHTML('afterend', '<div id="modaldialog" class="modal_dialog"><div id="modalindhold"></div></div>');
    // afterbody er efter </body> hvor der bliver indsat en <div id="modaldialog" classs="modaldialog">

    const modalindhold = document.getElementById("modalindhold");
    modalindhold.classList.add("modal_indhold");

    const modaldialog = document.getElementById("modaldialog");
    let dialogIndhold = '<span onclick="modaldialog.remove()" class="close">X</span><p><br>' + indhold + '</p>';
    // "modaldialog.remove() fjerner modaldialog boksen ved tryk på kryds

    modalindhold.style.width = bredde;
    modalindhold.style.height = hoejde;
    modalindhold.style.backgroundColor = baggrundsfarve;
    modalindhold.style.color = fontfarve;
    //

    if (placering === "centrer") {
        modalindhold.style.left = "50%";
        modalindhold.style.top = "50%";
        modalindhold.style.transform = "translate(-50%,-50%)";
        modalindhold.style.boxShadow = "5px 5px 5px black";

    }
    modalindhold.innerHTML = dialogIndhold;
}






// Hovedprogram


// Tang Salt

document.getElementById("tangsalt").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Tang Salt</h1><br><h2>Ingredienser:</h2><p>Salt</p><p>Tang</p><h2>Fremgangsmåde</h2><p>Hak tang og salt og kom i ovnen i 20 min. Nyd nu din tang salt ovenpå dit æg eller som en del af madlavningen.</p>", false);
});

// Tang chips

document.getElementById("tangchips").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Tang chips</h1><br><h2>Ingredienser:</h2><p>Tang</p><h2>Fremgangsmåde</h2><p>Læg tangen ud på et stykke bagepapir og stil i ovnen på 100grader i en time. </p>", false);
});


// Tang pesto

document.getElementById("tangpesto").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Tang pesto</h1><br><h2>Ingredienser:</h2><p>Salt</p><p>Tang</p><p>Olie</p><p>Pinjekerner</p> <h2>Fremgangsmåde</h2><p>Hak tang og pinjekerner og kom i et glas sammen med de resterende ingredienser</p>", false);
});


// Asgarges salat med tang

document.getElementById("aspargessalat").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Asparges salat</h1><br><h2>Ingredienser:</h2><p>Tørret tang</p><p>Asparges</p><p>Spinat blade</p><p>Olie</p><p>Feta</p> <h2>Fremgangsmåde</h2><p>Skyl asparges, knæk det dårlige af og skær resten i halvstore stykker. Riv eller skær mozarella i stykker og kom det hele i en skål. hæld olie over og server.</p>", false);
});


// Topping med tang

document.getElementById("topping").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Topping</h1><br><h2>Ingredienser:</h2><p>Salt</p><p>Tang</p><p>Mandler</p> <h2>Fremgangsmåde</h2><p>Hak mandler og tang og kom i ovnen i en time på 100 grader. Lad køle ned og spis på skyr sammen med bær.</p>", false);
});


// Tomat salat med tang

document.getElementById("tomatsalat").addEventListener("click", function () {
    dialog("350px", "350px", "white", "#055431", "centrer", "<h1>Tomat salat</h1><br><h2>Ingredienser:</h2><p>Tørret tang</p><p>Tomat</p><p>Buffalo mozzarella</p> <p>Olie</p><h2>Fremgangsmåde</h2><p>Skær tomater i kvarte, riv mozarella i stykker og hæld olie over og strø med salt og peber efter ønske. </p>", false);
});
