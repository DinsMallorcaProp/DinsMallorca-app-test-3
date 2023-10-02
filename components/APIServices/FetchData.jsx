import React, { useState, useEffect } from 'react';

const FetchData = () => {
    const [responseData, setResponseData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('/api/calendarEvents.json');
                const data = await response.json();
                setResponseData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div>
            <h1>Data from PHP Backend</h1>
            {responseData && <p>{responseData.message}</p>}
        </div>
    );
};

export default FetchData;
