function Marksheet(){
    function calcMarks()
    {
        let student = [
            {rno:1,phy:65,chem:78,maths:78,eng:77,hin:67},
            {rno:2,phy:65,chem:78,maths:78,eng:77,hin:67},
            {rno:3,phy:65,chem:78,maths:78,eng:77,hin:67}]
       
        return student;
    }

    return(<div>
        <table border='1'>
            <tr><th>Rno</th><th>Phy</th><th>Chem</th><th>Math</th>
            <th>Eng</th><th>Hin</th></tr>
       
        {calcMarks().map((item,value)=>(<tr><td>{item.rno}</td>
        <td> {item.phy}</td><td> {item.chem}</td>
        <td> {item.maths}</td><td> {item.eng}</td>
        <td> {item.hin}</td></tr>))}
        </table>
    </div>)
}
export default Marksheet;