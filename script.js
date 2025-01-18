console.log("haan bhai chalra hu")

let boxes=document.getElementsByClassName("box")

// ye jo function banaya h math.ceil ye decimal ko round off krke pass value integer value return krdega aur ye  formula aise use hua ki a + r*(b-a)  ab r random number h and 0 h a kyuki range color ki 0-255 hoti h toh b li jagha 255 aagya 255-0 and a and b 0 ya 1 k bech mae jab hoga tab random dega toh bs ye formuls use ho jayega vrna net pe dekh lena yr kya hogya chilllllllll
function getrandomcolor(){
    let val1= Math.ceil(0 + Math.random()* + 255)
    let val2= Math.ceil(0 + Math.random()* + 255)
    let val3= Math.ceil(0 + Math.random()* + 255)
    return `rgb(${val1},${val2},${val3})`
}
Array.from(boxes).forEach(e=>{
    e.style.backgroundColor = getrandomcolor()
    e.style.color = getrandomcolor()
})