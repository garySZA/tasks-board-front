export const clearLocalStorage = () => {
    Object.keys(localStorage).forEach(key => {
        if( !key.includes('theme') ){
            localStorage.removeItem(key)
        }
    })
}