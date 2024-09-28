import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import Home from './page/home.jsx'
import Imagine from './page/imagine.jsx'
import LifeOnMars from './page/lifeonmars.jsx'
import ZiggyStardust from './page/ziggystardust.jsx'
import Zombie from './page/zombie.jsx'
import KillingMoon from './page/killingmoon.jsx'
import LoveStreet from './page/lovestreet.jsx'
import LoveisMagick from './page/loveismagick.jsx'
import Starman from './page/starman.jsx'
import PerfectDay from './page/perfectday.jsx'
import KnockinOnHeavensDoor from './page/knockinonheavensdoor.jsx'
import Sunseed from './page/sunseed.jsx'
import  Inbetweendays from './page/inbetweendays.jsx'
import Cameasyouare from './page/cameasyouare.jsx'
import Hurt from './page/hurt.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="lifeonmars" element={<LifeOnMars />} />
          <Route path="ziggystardust" element={<ZiggyStardust />} />
          <Route path="imagine" element={<Imagine />} />
          <Route path="lovestreet" element={<LoveStreet />} />
          <Route path="loveismagick" element={<LoveisMagick />} />
          <Route path="zombie" element={<Zombie />} />
          <Route path="killingmoon" element={<KillingMoon />} />
          <Route path="starman" element={<Starman />} />
          <Route path="perfectday" element={<PerfectDay />} />
          <Route path="knockinonheavensdoor" element={<KnockinOnHeavensDoor />}/>
          <Route path="sunseed" element={<Sunseed />} />
          <Route path="inbetweendays" element={<Inbetweendays />} />
          <Route path="cameasyouare" element={<Cameasyouare />} />
          <Route path="hurt" element={<Hurt />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
