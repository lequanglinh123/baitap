export function getDataFromDoc(doc){
    const data = doc.data();
    data.id = doc.id;
    return data;
}
export function getDataFromDocs(res){
    return res.docs.map(getDataFromDoc);
}