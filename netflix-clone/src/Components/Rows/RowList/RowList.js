import React from 'react'
import Row from '../Row/Row'
import requests from '../../../utils/requests'

const RowList = () => {
  return (
    <div>
        <Row 
        title="NETFLIX ORGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}/>
        <Row
        title="TRENDING"
        fetchUrl={requests.fetchTrending}
        isLargeRow={false}/>
        <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={false}/>
        <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={false}/>
        <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={false}/>
         <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={false}/>
         <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={false}/>
         <Row
        title="TV SHOWS"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={false}/>
          <Row
        title="TOP RATED MOVIES"
        fetchUrl={requests.fetchTopRatedMovies} 
        isLargeRow={false}/>
    </div>
  )
}

export default RowList