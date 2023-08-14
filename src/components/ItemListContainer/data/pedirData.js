import app_data from "./app_data.json"

export const pedirData = () => {
  return new Promise((resolve, reject)=>{
        setTimeout( ()=> {
            resolve(app_data)
        }, 500)
  })
}
export const pedirItemPorId = (id) => {
    return new Promise((resolve, reject)=> {

        const item = app_data.find((el)=> el.id === id);

        if (item) {
            resolve(item);
        } else {
            console.error(`Producto con ID ${id} no encontrado`);
            reject({
              error: "producto no encontrado",
            })
        }
    })
}

