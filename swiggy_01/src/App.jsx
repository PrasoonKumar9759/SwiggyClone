import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import Apicalling from './components/Apicalling'
import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div>
      {/* <Apicalling /> */}
      <Header />
      {/* <Body  /> */}
      <Outlet/>
      {/* aapke route ke hisab se kabhi body ko kabhinhelp ko kabhi offer ko show kar dega */}
      {/* outlet aap ki request ke hissab se vo aapne ko change karke path change kar dega jisse jis path par request aayi h us par cla jata h */}
      <Footer />
    </div>
  )
}

export default App