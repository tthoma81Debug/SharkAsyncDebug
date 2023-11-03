import React, { useEffect, useState } from 'react';
import axios from 'axios';

function MyApp() {

    const [data, setData] = useState(null);
    //axios is used to keep the 'async' from react context to backend
    useEffect(() => {
        axios.get('http://localhost:5000/call-main-async')
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error("There was an error!", error);
            });
    }, []);
    
    return (
        <div>
           {/* Render your data here */}
           {data && <p>{data}</p>}
        </div>
    );
}

export default MyApp;
