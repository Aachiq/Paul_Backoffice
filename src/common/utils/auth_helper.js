// Login setLocalStorage
export const setLocalStorage = (data) => {
  localStorage.setItem("userBo_infos",JSON.stringify(data))
}

export const RemoveItemLocalStorage = () => {
  localStorage.removeItem("userBo_infos");
}

