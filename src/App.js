import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from "./components/UI/Navbar/Navbar";
import AppRouter from "./components/AppRoter";
import { AuthContext } from "./context";
import { useState } from "react";
import Main from "./pages/Main";
import Coffee from "./pages/coffee/Coffee";
import Footer from "./components/UI/Footer/Footer";
import Other from "./pages/other/Other";
import Clothes from "./pages/clothes/Сlothes";

function App(){
  const[isAuth, setIsAuth] = useState(false)
  const[isLoading, setLoading] = useState(true)

  useEffect(()=>{
    if (localStorage.getItem('auth')){
      setIsAuth(true)
    }
    setLoading(false)
  }, [])

  return(
    // <AuthContext.Provider value={{
    //   isAuth,
    //   setIsAuth,
    //   isLoading
    // }}>
    //   <Router>
    //     <Navbar/>
    //     {/* <Main/> */}
    //     <Coffee/>
    //     {/* <Other/> */}
    //     {/* <Clothes/> */}
    //     <Footer/>
    //     {/* <AppRouter/> */}
    //   </Router>
    // </AuthContext.Provider>
    <BrowserRouter>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route index element={<Main/>}/>
          <Route path="coffee" element={<Coffee title={false}/>}/>
          <Route path="clothes" element={<Clothes/>}/>
          <Route path="other" element={<Other/>}/>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    
  )
}

export default App;