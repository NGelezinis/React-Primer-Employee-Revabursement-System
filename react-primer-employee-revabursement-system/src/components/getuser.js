import {useState, useEffect} from 'react';

export default function GetUserById( {userid} ) {
    const [data, setData] = useState(null);
    const [loading, updateLoading] = useState(true);
    useEffect(
        ()=> {
            fetch(`http://employeerevabursementsystem-env.eba-s9jgpymb.us-east-2.elasticbeanstalk.com/users/${userid}`)
                .then((response) => response.json())
                .then(setData)
        },
        [loading, userid]
    );
    useEffect(() => updateLoading(false), [data]);
    if(data)
        return (
            <>
                <h1>User:</h1>
                <p>Id:         {data.userId}</p>
                <p>Email:      {data.email}</p>
                <p>Username:   {data.username}</p>
                <p>Name:       {data.firstName} {data.lastName}</p>
                <p>Authority:  {data.authority}</p>
            </>
        );
    if (loading)
        return(
            <h1>...</h1>
        );
    return <h1>No data found</h1>

}