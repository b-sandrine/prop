
function Person () {

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })

    let icon = contact.isFavorite ? "fa-solid fa-star icon-filled" : "fa-regular fa-star";


    function toggleFavorite() {
        console.log("Toogle Favorite");
        setContact({...contact, [contact.isFavorite]: true})
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.jpeg" className="card--image" />
                <div className="card--info">
                    {/* <img 
                        src={`../images/star-empty.png`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    /> */}
                    <div className="icon" onClick={toggleFavorite}>
                        <i class={icon} />
                    </div>
                    
                    <h2 className="card--name">
                        {contact.firstName + " " + contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Person/>)