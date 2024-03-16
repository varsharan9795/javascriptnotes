var element =document.querySelector('.myclass');
console.log(element.textContent)

var element =document.querySelectorAll('.myclass');
element.forEach(function(element){
    console.log(element.textContent);
    
})