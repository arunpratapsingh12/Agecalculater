const InputDob = document.querySelector('input');
const showAge = document.querySelector('p');


function calculate()
{
     const birthdate = new Date(InputDob.value);
     const currentDate = new Date();
     const newDate = new Date(currentDate - birthdate);
    //  console.log(birthdate);
    //  console.log(newDate);

     const years = newDate.getFullYear() - 1970;
     console.log(newDate.getFullYear());
    //  console.log(years);
     const month = newDate.getMonth();
    const day = newDate.getDate() - 1;
    
    // console.log(years);

     showAge.innerText = `You are ${years} years ${month} months ${day} days old.`; 
}
