function Getpin()
{
    const randomPin = Math.round(Math.random()*10000);
    const len = randomPin.toString().length;
    if(len==4)
    {
 
        return randomPin;
    }
    else
    {
        return Getpin();
    }
}

function GeneratePin()
{
   const pin = Getpin();
   document.getElementById("get_pin").value =pin;
  /*  const a = document.getElementById("get_pin");
   a.value = pin; */

}

document.getElementById("cal_parent").addEventListener("click",function(e){

    const number =  e.target.innerText;
    const InputBox=  document.getElementById("getnumber");

    if ( isNaN(number))
    {
        if (number =="C")
        {
            InputBox.value= "";
        }
    }
    else
    {
       
        const previousNumber = InputBox.value;
        const currentNumber = previousNumber+number;
        InputBox.value= currentNumber;
    }
})

function MatchPin()
{
    const generatedPin = document.getElementById("get_pin").value;
    const inputPin = document.getElementById("getnumber").value;
    const successMessage = document.getElementById("success");
    const failMessage = document.getElementById("fail");
    if (generatedPin==inputPin)
    {
      
       successMessage.style.display="block";
       failMessage.style.display= "none";
    }
    else
    {
        
        failMessage.style.display= "block";
        successMessage.style.display="none";
    }
}