
import { API_URL } from '../../../utils/env';
export const loginBo = (userAuth) => {
    return fetch(`${API_URL}/api-bo/auth/signin`,{
      method : 'POST',
      headers : {
        'Content-Type': 'application/json',
      },
      body : JSON.stringify(userAuth)
    }) 
}

export const logoutBo = () => {
  return fetch(`${API_URL}/signout`)
  .then((res) => res.json)
  .then((data) => console.log(data))
  .catch(err => console.log(err))
}