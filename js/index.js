var imgArray = new Array();
var index = 0;
 console.log("java");
function cycle()
{
    document.banner.src = imgArray[index].src;
    index++;
    if (index > 4)
    {
        index = 0;
    }
    setTimeout("cycle()", 2000);
    return;
}

function startup()
{
    imgArray[0] = new Image;
    imgArray[1] = new Image;
    imgArray[2] = new Image;
    imgArray[3] = new Image;
    imgArray[4] = new Image;

    imgArray[0].src = "images/photo00001.jpg"
    imgArray[1].src = "images/photo00002.png"
    imgArray[2].src = "images/photo00003.jpg"
    imgArray[3].src = "images/photo00004.jpg"
    imgArray[4].src = "images/photo00005.jpg"

    cycle();
    return;
}
