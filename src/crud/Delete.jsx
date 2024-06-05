import { db } from './Firebase';
import { ref, remove } from 'firebase/database';

const deleteData = async (key, table) => {
    const dataRef = ref(db, 'users/' + key);

    try {
        await remove(dataRef);
        console.log('Data successfully deleted');
    } catch (error) {
        console.error('Error deleting data:', error);
    }
};

export default deleteData;
