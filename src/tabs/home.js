function home() {
    console.log("1")
    const newP = document.createElement("p")
    newP.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, expedita quia perspiciatis ullam ea numquam repellat amet veritatis, in alias obcaecati repudiandae minima quod itaque consectetur possimus culpa similique blanditiis!"
    newP.style.cssText = "width: auto;text-align:center;"
    content.appendChild(newP)    
};

export default home