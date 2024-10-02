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
    {
      id: 10,
      title: 'Knockin On Heavens Door',
      artist: 'Bob Dylan',
      link: 'knockinonheavensdoor',
    },
    {
      id: 11,
      title: 'Sunseed',
      artist: 'Raul Seixas',
      link: 'sunseed',
    },
    {
      id: 12,
      title: 'In between days',
      artist: 'The Cure',
      link: 'inbetweendays',
    },
    {
      id: 13,
      title: 'Came as you are',
      artist: 'Nirvana',
      link: 'cameasyouare',
    },
    {
      id: 14,
      title: 'Hurt',
      artist: 'Jhonny Cash',
      link: 'hurt',
    },
    {
      id: 15,
      title: 'The man who sold the world',
      artist: 'David Bowie',
      link: 'themanwhosoldtheworld',
    },
    {
      id: 16,
      title: 'How could i know',
      artist: 'Raul Seixas ',
      link: 'howcouldiknow',
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