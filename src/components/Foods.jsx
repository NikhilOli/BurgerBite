import React, { useEffect } from 'react';

const Foods = () => {
    useEffect(() => {
        const fetchData = async () => {
            const url = 'https://burgers-hub.p.rapidapi.com/burgers';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '0e85184e99msh74a25ef4d4ad9e6p19cc0ejsna2734a8d27fd',
                    'X-RapidAPI-Host': 'burgers-hub.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                console.log(result);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            Food
        </div>
    );
};

export default Foods;
