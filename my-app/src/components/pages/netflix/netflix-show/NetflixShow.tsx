import React, { useEffect, useState } from 'react'
import Row from './Row'
import {API_KEY, api} from '../../../netflix-app/api/api'
import Banner from './Banner'

const NetflixShow = () => {
  return (
    <div className="mt-6-rem bg-netflix">
      <Banner />
      <Row  
        title="Netflix Orginals"
        fetchUrl={api.fecthNetflixOriginals}
        isLargeRow
      />
      <Row  
        title="Tending now"
        fetchUrl={api.fetchTending}
      />
      <Row  
        title="Top Rated"
        fetchUrl={api.fetchTopRated}
      />
      <Row  
        title="Action Movies"
        fetchUrl={api.fetchActionMovies}
      />
      <Row  
        title="Comedy Movies"
        fetchUrl={api.fetchComedyMovies}
      />
      <Row  
        title="Horror Movies"
        fetchUrl={api.fetchHorrorMovies}
      />
      <Row  
        title="Rocmance Movies"
        fetchUrl={api.fetchRomanceMovies}
      />
      <Row  
        title="Documentaries"
        fetchUrl={api.fetchDocumentaries}
      />
    </div>
  )
}

export default NetflixShow
