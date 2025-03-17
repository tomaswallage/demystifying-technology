
$("p").css("color", "grey")


function lowerOpacity(){
    $("p").css("opacity", "0")
    console.log("opacityyo")
}

// function lowerOpacity(){
//     $("p").toggleClass("hide")
// }

// $("p").click(lowerOpacity)

// function popup(){
//     $(".pop").toggleClass("show")
// }

// $(".button").click(popup)

function hideText(){
    $(this).css("color", "rgb(48, 217, 36)")
}

function showText(){
    $(this).css("color", "grey")
}

$("p").hover(hideText, showText)

// above code turns text green

function demyst(){
    $(".cloud").toggleClass("show")

}

$(".cloud").click(demyst)

function bigText(){
    $(this).css("color", "red")
}

function smallText(){
    $(this).css("color", "blue")
}

$("big").hover(bigText, smallText)

// function changeFont(){
//     let randomfont = 
//     $("p").css("color", "rgb("+randomR+", "+randomG+", "+randomB+")")
// }

// changeFont()



function helv(){
    $("p").css("font-family", "Helvetica")
}

function roman(){
    $("p").css("font-family", "Times New Roman")
}

$("helv").hover(helv, roman);

