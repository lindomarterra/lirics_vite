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
import Comeasyouare from './page/comeasyouare.jsx'
import Hurt from './page/hurt.jsx'
import Themanwhosoldtheworld from './page/themanwhosoldtheworld.jsx'
import Howcouldiknow from './page/howcouldiknow.jsx'
import Linger from './page/linger.jsx'
import Imeltwithyou from './page/imeltwithyou.jsx'
import Karmachameleon from './page/karmachameleon.jsx'
import Orangejuice from './page/orangejuice.jsx'

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
          <Route path="comeasyouare" element={<Comeasyouare />} />
          <Route path="hurt" element={<Hurt />} />
          <Route path="themanwhosoldtheworld" element={<Themanwhosoldtheworld />}/>
          <Route path="howcouldiknow" element={<Howcouldiknow />} />
          <Route path="linger" element={<Linger/>} />
          <Route path="imeltwithyou" element={<Imeltwithyou/>}/>
          <Route path="karmachameleon" element={<Karmachameleon/>} />
          <Route path="orangejuice" element={<Orangejuice/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
