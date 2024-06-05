import '../style/AddModal.css';
import { useState } from 'react';
import addData from '../crud/Add';

const AddModal = ({ onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    });
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleAddClick = async () => {
        setLoading(true);
        try {
            await addData(formData);
            console.log('Form Data:', formData);
            onClose(); 
            alert("Data added successfully")
        } catch (error) {
            console.error("Error saving data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Add Data</h2>
                <label>Name: </label>
                <input type="text" name='name' value={formData.name} onChange={handleInputChange} /> <br />
                <label>Username: </label>
                <input type="text" name='username' value={formData.username} onChange={handleInputChange} /> <br />
                <label>Password: </label>
                <input type="password" name='password' value={formData.password} onChange={handleInputChange} /> <br />
                <button onClick={handleAddClick} disabled={loading}>
                    {loading ? 'Saving...' : 'Add'}
                </button>
                <button onClick={onClose} disabled={loading}>Close</button>
            </div>
        </div>
    );
};

export default AddModal;
