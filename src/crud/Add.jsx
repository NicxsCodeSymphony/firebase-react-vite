import { db } from './Firebase';
import { ref, push, set } from 'firebase/database';

const addData = async (data) => {
  try {
    const newPostRef = push(ref(db, 'users'));
    await set(newPostRef, data);
    console.log("Data saved successfully");
  } catch (e) {
    console.error("Error saving data: ", e);
  }
};

export default addData;
