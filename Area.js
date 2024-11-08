import { useRef, useState } from "react";

function Area()
{
    const rd1 = useRef()
    const rd2 = useRef()
    const txt1 = useRef()
    const txt2 = useRef()
    const[v1,setV1] = useState()
    const[v2,setV2] = useState()
   function fun(e)
   {
    console.log(rd1.current.checked)
    if(rd1.current.checked)
    {
        setV1('block')
        setV2('block')
    }
    else
    {
        setV1('block')
        setV2('none')
    }
   }
   function calc(e)
   {
      alert("rno is "+txt1.current.value + "name is "+txt2.current.value)
      e.preventDefault()
   }
    return(
        <div>
            <form>
            <input type="radio" name="r" ref={rd1} value="both" onClick={fun} />both<br/>
            <input type="radio" name="r" ref={rd2}  value="one" onClick={fun} />ONE<br/>
            <input type="text" id="rno" ref={txt1} style={{display:v1}}  placeholder="Enter rno" />
            <br/>
            <input type="text" id="name" ref={txt2} style={{display:v2}} placeholder="Enter name" />
             <br/>
             <input type="submit" onClick={calc} value="Click"/>
            </form>
        </div>
    )
}
export default Area;