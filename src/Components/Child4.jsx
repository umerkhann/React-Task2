function Child4(){
    const array = [1,2,3,4,5];
    return(
        <>
        {array.map((val)=> (
            <h5>
                index = {val}
            </h5>
        ))}
        </>
    )
}

export default Child4;