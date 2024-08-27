
import { Navigate,Outlet } from 'react-router-dom'
import {useAuth }from "../context/AuthContext"
export default function privateRoute() {
  const {currentUser}=useAuth()

  return currentUser ? <Outlet/> : <Navigate to="/login " replace />
    
  /*  replace :it remove detailpage from history of url , */
                                             /* when i make logout from the page and i want to type somthing in url i cant see the privios page wich details page (url it will be show automaticly a pevios page ) */

}
