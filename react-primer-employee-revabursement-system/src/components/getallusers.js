import {useState, useEffect} from 'react';

export default function GetAllUsers() {
    const [data, setData] = useState(null);
    const [loading, updateLoading] = useState(true);
    useEffect(
        ()=> {
            fetch(`http://employeerevabursementsystem-env.eba-s9jgpymb.us-east-2.elasticbeanstalk.com/users`)
                .then((response) => response.json())
                .then(setData)
        },
        [loading]
    );
    useEffect(() => updateLoading(false), [data]);
    if(data)
        return (
            <>
                <h1>Users:</h1>
                <ul>
                    {data.content.map((elem, index) =>
                        <li key = {index}> 
                            <p>Id:         {elem.userId}</p>
                            <p>Email:      {elem.email}</p>
                            <p>Username:   {elem.username}</p>
                            <p>Name:       {elem.firstName} {elem.lastName}</p>
                            <p>Authority:  {elem.authority}</p>
                        </li>
                    )}
                </ul>
            </>
        );
    if (loading)
        return(
            <h1>...</h1>
        );
    return <h1>No data found</h1>
}