import app_data from "./ItemListContainer/data/app_data.json"

const pedirPoductos = () => {
    return new Promise((resolve, reject)=> {
        resolve(app_data)
    }) 
}
export default pedirPoductos;
    