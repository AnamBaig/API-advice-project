import React from 'react';
export default function Test() {
    const [advice, setAdvice] = React.useState();

  
  React.useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then((data) => setAdvice(data.slip.advice))
  }, []);

  console.log(advice)

    return (
        <div>
           <p>{advice}</p>
        </div>
    )
}

//lets say data is entire object. 
//then in object slip is the first property
//inside slip is the advice property we want.
// so setAdvice to data.slip.advice - directly
// what i am going for.
// didnt use json.stringify... 
//*maybe because the advice property itself 
// is already a string* as it is in " " in the console.
// if do need to use stringify it leaves
// the quotation marks in for some reason.
// but when leaving normally as above 
// in the div it doesnt.
// didnt set state as array as this in an object.