import axios from "axios"

const URL_ROOT = `https://comercio-be.onrender.com/api/productos`

const getProductsService = async () => {
    const response = await axios.get(`${URL_ROOT}`)
    return response
}

const getProductService = async (id) => {
    const response = await axios.get(`${URL_ROOT}/${id}`)
    return response
}

export { getProductsService, getProductService }