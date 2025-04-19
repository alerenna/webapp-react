import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from '../layout/DefaultLayout'
import Homepage from './pages/Homepage'
import SingleMovie from './pages/SingleMovie'
import { GlobalContext } from "./contexts/GlobalContext"



function App() {

  const [isLoading, setIsLoading] = useState(false)

  return (
    <GlobalContext.Provider value={{ isLoading, setIsLoading }}>


      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>

            <Route path='/' index element={<Homepage />} />
            <Route path='/movies/:id' element={<SingleMovie />} />

          </Route>

        </Routes>

      </BrowserRouter >


    </GlobalContext.Provider>
  )
}

export default App
