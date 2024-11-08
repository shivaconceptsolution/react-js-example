import { useRef } from "react"

function Prime()
{
    let txtref = useRef() // reference
    function checkPrime(e)
    {
        let num = parseInt(txtref.current.value)
        var s=''
        if(num%2===0 && num>2)
        {
            s="not prime"
        }
        else
        {
            for(var i=2;i<num;i++)
            {
                if(num%i==0)
                {
                    s="not prime"
                    break
                }
            }
            if(num==i)
            {
                s="prime"
            }
        }
        alert(s)
        e.preventDefault()
    }
    return(<div>
      <form onSubmit={checkPrime}>
        <input type="text" ref={txtref} placeholder="Enter number" />
        <br/>
        <input type="submit" value="Check Prime" />
      </form>
    </div>)
}
export default Prime;