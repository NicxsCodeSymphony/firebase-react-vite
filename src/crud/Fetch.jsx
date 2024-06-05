import { db } from './Firebase';
import { ref, onValue } from 'firebase/database';
import { useEffect } from 'react';

const useFetchData = (setData, table) => {
    useEffect(() => {
        const dataRef = ref(db, table);

        const fetchData = () => {
            onValue(dataRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    setData(data);
                } else {
                    setData([]);
                }
            }, {
                cancelCallback: (error) => {
                    console.error('Error fetching data:', error);
                    setData([]);
                }
            });
        };
        fetchData();
        return () => {
            onValue(dataRef, null);
        };
    }, [setData]); 
};

export default useFetchData;
