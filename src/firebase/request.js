import { collection, getDocs, doc, deleteDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

async function call(entity) {
    const postCollectionRef = collection(db, entity);
    const res = await getDocs(postCollectionRef);
    return res.docs.map(item => ({ id: item.id, ...item.data() }));
}

async function remove(entity, id) {
    const oneElement = doc(db, entity, id);
    return await deleteDoc(oneElement);
}

async function save(entity, data, id) {
    const postCollectionRef = doc(db, entity, id);
    return await setDoc(postCollectionRef, data);
}

async function edit(entity, data) {
    const oneElement = doc(db, entity, data.id)
    return await setDoc(oneElement, data);
}

export default { call, save, remove, edit};