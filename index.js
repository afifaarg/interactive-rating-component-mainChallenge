
const rates = document.querySelectorAll('.rate');
const btn= document.querySelector('.subBtn');
let rating =0;

//create eventListner
rates.forEach(input => {
    input.addEventListener('click', onRateClick);
  });


function onRateClick(event){
    rates.forEach(input => {
        input.classList.remove('active');
    });
    event.target.classList.add('active');
    rating = event.target.value;
    console.log(event.target.value);
  }


  
btn.addEventListener('click',e=>{
    document.getElementById("container1").style.display="none";
 document.getElementById("container2").style.display="block";
 document.getElementById("NbrStar").innerHTML = "You Selected  "+rating+ "  Out of 5"; 
});




 