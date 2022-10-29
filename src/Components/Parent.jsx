import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";
import Child4 from "./Child4";
import Child5 from "./Child5";

const Parent = () =>{
    const parentFunction = () =>{
        console.log("I am working bro!");
    }
    let val = true; 
    return(
        <div className="center">
            <table>
                <tr>
                    <td>
                        <Child1/>
                    </td>
                    <td>
                    <Child2 newFun = {parentFunction}/>
                    </td>
                    <td>
                    <Child3/>
                    </td>
                </tr>
                <tr>
                    <td>
                    <Child4/>
                    </td>
                    <td>
                    <Child5/>
                    </td>
                    <td>
                    {val ? <Child2 newFun = {parentFunction} /> : <Child1/>}
                    </td>
                </tr>
            </table>
        {/* <div className="row">
            <div className="col">
                <Child1/>
            </div>
            <div className="col">
                <Child2 newFun = {parentFunction}/>
            </div>
            <div className="col">
                <Child3/>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <Child4/>
            </div>
            <div className="col">
                <Child5/>
            </div>
            <div className="col">
            {val ? <Child2 newFun = {parentFunction} /> : <Child1/>}
            </div>
        </div> */}
        </div>
    )
}

export default Parent;