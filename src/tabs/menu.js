function menu() {
    console.log("2")
    const newP = document.createElement("p")
    newP.innerText = `Spaghetti and Meatballs\n Meatballs and Spaghetti\n Garlic Bread\n One Really Big Meatball`
    newP.style.cssText = "display:flex;width: auto;text-align:center;"
    content.appendChild(newP)    
};

export default menu