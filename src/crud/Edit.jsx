// Edit.jsx

import { db } from './Firebase';
import { ref, set } from 'firebase/database';

const editData = async (id, newData) => {
    try {
        if (!id) {
            throw new Error('ID is required to edit data');
        }

        const dataRef = ref(db, `users/${id.key}`);
        await set(dataRef, newData);
        console.log('Data successfully updated');
    } catch (error) {
        console.error('Error updating data:', error);
    }
};

export default editData;
