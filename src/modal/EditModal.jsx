import '../style/AddModal.css';
import { useState } from 'react';

const EditModal = ({ data, key, onSave, onClose }) => {
    const [formData, setFormData] = useState({
        name: data.name,
        username: data.username,
        password: data.password
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSaveClick = () => {
        onSave(formData);
        onClose();
    };

    return (
        <div className='modal-overlay'>
            <div className='modal-content'>
                <h2>Edit Data</h2>
                <label>Name: </label>
                <input type="text" name='name' value={formData.name} onChange={handleInputChange} /> <br />
                <label>Username: </label>
                <input type="text" name='username' value={formData.username} onChange={handleInputChange} /> <br />
                <label>Password: </label>
                <input type="password" name='password' value={formData.password} onChange={handleInputChange} /> <br />
                <button onClick={handleSaveClick}>Save</button>
                <button onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
};

export default EditModal;
