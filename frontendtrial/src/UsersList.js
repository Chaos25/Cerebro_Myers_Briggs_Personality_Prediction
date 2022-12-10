import React from 'react';
import axios from 'axios';

const UserList= props=>{
    const [data,setData]= React.useState([]);
    React.useEffect(()=>{
        axios('http://127.0.0.1:5001/signup')
        .then(response=>{
            if(response.status===200)
            {
                setData(response.data.rows)
            }
        })
        .catch(err=>{

        })
    })
    return (<div>
        UserList Component
        {
            data.length>0 &&
            data.map(item=>
                <div>{item}</div>)
        }
    </div>)
}
export default UserList;