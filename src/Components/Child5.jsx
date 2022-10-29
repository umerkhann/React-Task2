function Child5(){
    const arr = [1,2,3,4,5]
    const listItems = arr.map((val) => (
        <li>{val}</li>
    )
    )
    return(
        <>
        <ul>{listItems}</ul>
        </>
    )
}

export default Child5;