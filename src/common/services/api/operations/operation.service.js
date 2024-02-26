
import { API_URL } from '../../../utils/env';
export const getOperationsService = () => {
    return fetch(`${API_URL}/api-bo/operations/showall`)
}

export const getStatusService = () => {
    return fetch(`${API_URL}/api-bo/operations/status/showall`)
}

export const getOperationsByStatusService = (idStatus) => {
    return fetch(`${API_URL}/api-bo/operations/show-by-status/${parseInt(idStatus)}`)
}

export const getOperationsByDateService = () => {
    return fetch(`${API_URL}/api-bo/operations/status/showall`)
}