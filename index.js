function App() {
    /* 
    * Firstly, we learnt how to parse variables in a react
    * My teacher talked about parsing them like how we do in Javascript which won't work because we are using JSX.
    * 
    */
    // const firstName = 'sandrine';
    // const LastName = "Dushimimana";
    // return (
    //     <div>
    //         <h1>Hello {firstName} {LastName}</h1>
    //     </div>
    // )
}

function Greeting() {
    var date = new Date();
    // Greet a person depending on the time
    var greetSaying;
    var hours = date.getHours();
    const firstName = 'sandrine';
    if(hours < 12 ) {
        greetSaying = "morning";
    }
    else if(hours >= 12 || hours < 18 ) {
        greetSaying = "evening"
    }
    else {
        greetSaying = "night";
    }

    return (
        <div>
            <br></br>
            <p>Good {greetSaying }, {firstName}!</p>
            <h1>Hello, It is { date.getHours() } : {date.getMinutes()} : {date.getSeconds()} </h1>  
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting />);