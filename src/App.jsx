import { BrowserRouter, Routes, Route } from "react-router-dom"
import DefaultLayout from '../layout/DefaultLayout'
import Homepage from './pages/Homepage'
import SingleMovie from './pages/SingleMovie'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>

            <Route element={<Homepage />} />
            <Route element={<SingleMovie />} />

          </Route>

        </Routes>

      </BrowserRouter >
    </>
  )
}

export default App
