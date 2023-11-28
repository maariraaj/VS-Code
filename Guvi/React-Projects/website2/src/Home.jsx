import React from 'react'
import Cards from './Cards'

function Home({name, sex, land}) {
  return (
    <div>Home Page
        <h3>{name}</h3>
        <h4>{sex}</h4>
        <Cards land={land} />
    </div>
  )
}

export default Home