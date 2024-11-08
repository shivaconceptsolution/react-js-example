function TableExample()
{

    function calcTable(n){
      let out=[]
      for(let i=1;i<=10;i++){
        out.push(n*i)
      }
      return out;
    }

    return(<div>
          {calcTable(9).map((item)=>(<p>{item}</p>))}
    </div>)
}
export default TableExample;