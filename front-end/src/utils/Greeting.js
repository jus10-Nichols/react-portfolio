function Greeting() {
var today = new Date()
var curHr = today.getHours()

if (curHr < 12) {
return(
<>
<HeaderContainer>
<Header>Good Morning!</Header>
</HeaderContainer>
</>);
} else if (curHr < 18) {  return(
<>
<HeaderContainer>
<Header>Good Afternoon!</Header>
</HeaderContainer>
</>);
} else {
    return(
<>
<HeaderContainer>
<Header>Good Evening!</Header>
</HeaderContainer>
</>);
}
    
}
export default Greeting;