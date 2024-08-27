import React from 'react'
import {Routes,Route} from "react-router-dom"
export default function AppRoutes() {

  return (
<Routes>
  <Route path="/" element={<Home/>}/>
   <Route path="/login" element={<Login/>}/>

   <Route path="/register" element={<Register/>}/>
<Route element={<PrivateRout/>}>          {/* no path here */}
   <Route path="/details/:id" element={<MovieDetails/>}/>
   </Route>

</Routes>
  )
}
