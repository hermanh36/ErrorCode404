 
 export const signup = (user) => {
   return $.ajax({
     url: '/api/users',
     method: 'post',
     data: {user: user}
   })
 };

 export const login = (user) => {
   return $.ajax({
     url: '/api/sessions',
     method: 'post',
     data: {user: user}
   })
 };

 export const logout = () => {
   return $.ajax({
     url: '/api/sessions',
     method: 'delete'
   })
 };