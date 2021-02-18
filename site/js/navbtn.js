// class: _navbtn , _navlist , _navcont, _nav
window.istap=false
window.speed = 5

var nav = document.getElementsByClassName("_nav")[0].offsetHeight
var navtop = document.querySelector("._navcont").offsetHeight
console.log(navtop)
document.getElementsByClassName("_navbtn")[0].setAttribute("type","image")
document.getElementsByClassName("_navbtn")[0].setAttribute("src","img/navbtn.png")
document.getElementsByClassName("_navbtn")[0].setAttribute("onclick","expand(true)")
document.getElementsByClassName("_navbtn")[0].setAttribute("onblur","setTimeout(xblur,150)")
document.getElementsByClassName("_body")[0].style.top = navtop + "px"

var expandi=0;
function expand ()
{
    if(expandi===0)
    {
        if(!window.istap)
        {
            ani(true,window.speed)
            expandi=1
        }
        else
        {
            let tmp = window.speed
            window.speed=0;
            ani(true,window.speed)
            window.speed=tmp
            expandi=1
        }
    }
    else
    {
        if(!window.istap)
        {
            ani(false,window.speed)
            expandi=0
        }
        else
        {
            var tmp2 = window.speed
            window.speed=0;
            ani(false,window.speed)
            window.speed=tmp2
            expandi=0
        }
    }
}

function show (fun)
{
    fun()
    window.istap=true
    setTimeout(function () {window.istap=false},window.speed*100)
}

function xblur ()
{
    if(expandi!=0)
    {
        expand()
    }
}

function ani (hide,sp)
{
    var co = document.getElementsByClassName("_body")[0]
    if(hide)
    {
        for(let j = navtop; j < nav ;j++) {
            setTimeout( function () {co.style.top = j.toString()+"px"},sp*(j-49))
        }
    }
    else
    {
        var c=1
        for (let k = nav; k > navtop; k--) {
            setTimeout( function () { co.style.top = k.toString()+"px" },sp*c++)
        }
    }
}