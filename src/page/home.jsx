import { useState } from 'react'
import LinkLirics from '../components/linkLirics'
import Header from '../components/header'


const AllLirics = () => {

  const [search, setSearch]=useState('')
  const [todos] = useState([
    {
      id: 1,
      title: 'Life on Mars',
      artist: 'David Bowie',
      link: 'lifeonmars',
    },
    {
      id: 2,
      title: 'Ziggy Stardust',
      artist: 'David Bowie',
      link: 'ziggystardust',
    },
    {
      id: 3,
      title: 'Imagine',
      artist: 'John Lennon',
      link: 'imagine',
    },
    {
      id: 4,
      title: 'Love Street',
      artist: 'The Doors',
      link: 'lovestreet',
    },
    {
      id: 5,
      title: 'Love is Magick',
      artist: 'Raul Seixas',
      link: 'loveismagick',
    },
    {
      id: 6,
      title: 'Zombie',
      artist: 'The Cranberries',
      link: 'zombie',
    },
    {
      id: 7,
      title: 'Killing Moon',
      artist: 'Echo & the Bunnymen',
      link: 'killingmoon',
    },
    {
      id: 8,
      title: 'Starman',
      artist: 'David Bowie',
      link: 'starman',
    },
    {
      id: 9,
      title: 'Perfect Day',
      artist: 'Lou Reed',
      link: 'perfectday',
    },
  ])

  return (
    <main>
      <Header search={search} setSearch={setSearch} />
      <div className="p-3 d-flex flex-column justify-content-center align-items-center">
        {todos
          .filter((todo) =>
            todo.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((todo) => (
            <LinkLirics
              key={todo.id}
              title={todo.title}
              link={todo.link}
              artist={todo.artist}
            />
          ))}
      </div>
    </main>
  )
}

export default AllLirics
