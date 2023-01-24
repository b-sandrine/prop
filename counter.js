
function Counter() {

    let[count, setCount] = React.useState(0);

    function addCounter() {
        // setCount(count + 1)
        // Keeping track of prevCount

        setCount(prevCount => prevCount + 1
        )
    }

    function subtractCounter () {
        setCount (prevCount => prevCount -1);
    }

    return (
        <div class="container">
            <div className="add--count" onClick={addCounter}>
                <h1 >+</h1>
            </div>
            <div className="count--holder">
                <h1>{count}</h1>
            </div>
            <div className="minus--count" onClick={subtractCounter}>
                <h1 >-</h1>
            </div>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Counter />);