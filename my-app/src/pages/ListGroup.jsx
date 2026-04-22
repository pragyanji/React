import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';



function ListGroup() {
    const[selectedIndex,setSelectedIndex] = useState(-1)
    const cities = ['Kathmandu', 'Butwal', 'Pokhara','Dang','Janakpur'];
    // const cities = []
    return (
        <>
        <h1>List of Cities</h1>
        {cities.length === 0 && <p>no any cities</p>}
        <ul className="list-group">
            {cities.map((city,index) => <li key={index} onClick={()=>setSelectedIndex(index)} className={selectedIndex === index ? "list-group-item active" : 'list-group-item'}>{city}</li>)}
        </ul>
        </>
    );
}


export default ListGroup;
