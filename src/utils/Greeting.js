import React from "react";

function Greeting() {
var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
return(
<>
Good Morning!
</>);
} else if (curHr < 16) {  return(
<>
Good Afternoon!
</>);
} else {
    return(
<>
Good Evening!
</>);
}
    
}
export default Greeting;