import { API_URL } from "../../../utils/env"

export const getAllMenusFood = () => {
    return fetch(`${API_URL}/api-bo/menu-food/showAll`)
}