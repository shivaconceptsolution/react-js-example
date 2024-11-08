import { useRef } from "react";
function SI()
{
    let p =  useRef() // hooks method 
    let r =  useRef()
    let t =  useRef()
    function calcSI(e)
    {
        let si = parseFloat(p.current.value)
        *parseFloat(r.current.value)
        *parseFloat(t.current.value)/100;
        alert('Result is '+si)
        e.preventDefault()
    }
    return(<div>
        <form onSubmit={calcSI}>
            <input type="text" name="txtp" 
            ref={p} placeholder="Enter P" />
            <br/>
            <input type="text" name="txtr"
             ref={r} placeholder="Enter r" />
            <br/>
            <input type="text" name="txtt"
             ref={t} placeholder="Enter t" />
            <br/>
            <input type="submit" value="Calculate" />
        </form>
    </div>)
}
export default SI;