function contact() {
    console.log("3")
    const newP = document.createElement("p")
    newP.innerText = `Contact Us\nPhone: 555-555-5555\nEmail: email@notanemail.com\naddress: yes`
    newP.style.cssText = "display:flex;width: auto;text-align:center"
    content.appendChild(newP)    
};

export default contact