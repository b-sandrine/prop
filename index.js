function App() {
    /* 
    * Firstly, we learnt how to parse variables in a react
    * My teacher talked about parsing them like how we do in Javascript which won't work because we are using JSX.
    * 
    */
    const firstName = 'sandrine';
    const LastName = "Dushimimana";
    return (
        <div>
            <h1>Hello {firstName} {LastName}</h1>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);