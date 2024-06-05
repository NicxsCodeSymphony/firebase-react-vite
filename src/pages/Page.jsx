import { useState } from "react";
import AddModal from "../modal/AddModal";
import EditModal from "../modal/EditModal";
import useFetchData from "../crud/Fetch";
import deleteData from "../crud/Delete";
import editData from "../crud/Edit";

const Page = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [data, setData] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    let table = 'users';

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenEditModal = (item, key) => {
        setSelectedItem({ key, ...item }); 
        setIsEditModalOpen(true);
    };

    const closeEditModal = () => {
        setIsEditModalOpen(false);
    };

    useFetchData(setData, table);

    const handleDeleteClick = (key) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this item?");
        if (confirmDelete) {
            deleteData(key).then(() => {
                setSelectedItem(null);
            });
        }
    };


    const handleSaveEdit = (newData) => {
        if (selectedItem) {
            console.log(selectedItem)
            editData(selectedItem, newData).then(() => {
                setSelectedItem(null);
                setIsEditModalOpen(false); 
            });
        }
    };


    return (
        <div>
            <button onClick={handleOpenModal}>Add Data</button>
            <h1>Hello World</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(data).map(([key, value]) => (
                        <tr key={key}>
                            <td>{value.name}</td>
                            <td>{value.username}</td>
                            <td>{value.password}</td>
                            <td>
                            <button onClick={() => handleOpenEditModal(value, key)}>Edit</button>
                                <button onClick={() => handleDeleteClick(key)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && <AddModal onClose={closeModal} />}
            {isEditModalOpen && (<EditModal data={selectedItem} onSave={handleSaveEdit} onClose={closeEditModal} />)}
        </div>
    );
};

export default Page;
