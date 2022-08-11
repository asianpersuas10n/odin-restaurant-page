import pic from "./pic.jpg"
import home from "./tabs/home"
import menu from "./tabs/menu"
import contact from "./tabs/contact"


(() => {
    console.log("yehaw")

    const body = document.querySelector("body")
    const content = document.querySelector("#content")
    const newP2 = document.createElement("p")
    const newFooter = document.createElement("footer")

    const myPic = new Image()
    myPic.src = pic
    myPic.onload = function() {
        body.style.backgroundImage = "url(" + myPic.src + ")"
    }


    body.style.cssText = "display: grid;width: auto; min-height: 90vh;background: no-repeat center center fixed;"

    content.style.cssText = "display:flex;flex-direction:column;align-items:center;"

    newP2.innerHTML = "<button id='homebtn'>Home</button><button id='menubtn'>Menu</button><button id='contactbtn'>Contact</button>"
    newP2.cssText = "display:flex;justify-content='flex-end'; width: 100px;"
    content.appendChild(newP2);

    const homebtn = document.querySelector("#homebtn")
    const menubtn = document.querySelector("#menubtn")
    const contactbtn = document.querySelector("#contactbtn")

    home()

    homebtn.addEventListener("click", () => {
        remove()
        home()
    })

    menubtn.addEventListener("click", () => {
        remove()
        menu()
    })

    contactbtn.addEventListener("click", () => {
        remove()
        contact()
    })
 
    newFooter.innerHTML = "<a href='https://www.pexels.com/photo/delicious-spaghetti-with-bolognese-sauce-and-parmesan-cheese-7218637/'>Photo by Monica Turlui from Pexels</a>"
    newFooter.style.cssText = "display:flex;margin-top: auto;justify-content:center;align-items:center;"
    body.parentNode.insertBefore(newFooter, body.nextSibling)

    function remove() {
        content.removeChild(content.lastChild);
    }
})(); 