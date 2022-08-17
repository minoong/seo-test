import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Link, Outlet, Route, Routes } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import ThemeRoutes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Link to='/'>home</Link>
      <Link to='/blog'>blog</Link>
      <Link to='/test'>test</Link>
      {/* <ThemeRoutes /> */}
      <Routes>
        <Route path="/auth" element={
          <>
           <div>auth</div>
           <Outlet />
          </>
        }>
          <Route path="status" element={
          <>
           <>
           <Helmet>
             <title>/auth/status</title>
           </Helmet>
           <div>status</div>
           </>
          </>
          } />
          <Route path="process" element={
          <>
           <>
           <Helmet>
             <title>/auth/process</title>
           </Helmet>
           <div>process</div>
           </>
          </>
          } />
        </Route>
        <Route path="/sign" element={
          <>
           <div>sign</div>
           <Outlet />
          </>
        }>
          <Route path="status" element={
          <>
           <>
           <Helmet>
             <title>/sign/status</title>
           </Helmet>
           <div>status</div>
           </>
          </>
          } />
          <Route path="process" element={
          <>
           <>
           <Helmet>
             <title>/sign/process</title>
           </Helmet>
           <div>process</div>
           </>
          </>
          } />
        </Route>
    </Routes>
     {/* <Routes>
      <Route path="/auth/status" element={
        <>
        <Helmet>
          <title>/auth/status</title>
        </Helmet>
        <div>/auth/status</div>
        </>
        
      } />
      <Route path="/sign/status" element={
        <>
        <Helmet>
          <title>/sign/status</title>
        </Helmet>
        <div>/sign/status</div>
        </>
      } />
      <Route path="/auth/process" element={
        <>
        <Helmet>
          <title>/auth/process</title>
        </Helmet>
        <div>/auth/process</div>
        </>
        
      } />
      <Route path="/sign/process" element={
        <>
        <Helmet>
          <title>/sign/process</title>
        </Helmet>
        <div>/sign/process</div>
        </>
      } />
    </Routes> */}
    </div>
  )
}

export default App
