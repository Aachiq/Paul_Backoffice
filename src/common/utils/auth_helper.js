// Login setLocalStorage
export const setLocalStorage = (data) => {
  localStorage.setItem("userBo_infos",JSON.stringify(data))
}

export const RemoveItemLocalStorage = (property) => {
  localStorage.removeItem(property);
}

export const getItemLocalStorage = (property) => {
  return JSON.parse(localStorage.getItem(property))
}

// protected route
export const isAuthenticated = () => {
  const authData = localStorage.getItem('userBo_infos');
  if(authData){
   return JSON.parse(authData);
  }
  return false;
}

