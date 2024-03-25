import { API_URL } from "../../../utils/env"

export const getCategoriesService = async () => {
    return fetch(`${API_URL}/api/categories/showall`)
    .then((res) => res.json())
    .then((data) => data.categories)
}