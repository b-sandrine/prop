function AddItem () {

    let [itemList,setItemList] = React.useState([]);

    function addItem() {
        setItemList([...itemList, `Item ${itemList.length + 1} `])
    }

    let item =  itemList.map(thing => <li>{thing}</li>)

    return (
        <div>
            <button onClick={addItem}>Add item</button>
            {item}

        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AddItem />);
