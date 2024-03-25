import { API_URL } from "../../../utils/env"

export const getProductsService = async () => {
    return fetch(`${API_URL}/api/products/showall`)
    .then((res) => res.json())
    .then((data) => data.products)
}

export const createProductService = async (idUser,token,productFormDataObj) => {
    return fetch(`${API_URL}/product/create/${idUser}`,{
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: productFormDataObj,
    })
    .then((res) => res.json())
    .then((data) => data.message)
}