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
        isLargeRow={true}/>
        <Row
        title="ACTION MOVIES"
        fetchUrl={requests.fetchActionMovies}
        isLargeRow={true}/>
        <Row
        title="COMEDY MOVIES"
        fetchUrl={requests.fetchComedyMovies}
        isLargeRow={true}/>
        <Row
        title="DOCUMENTARIES"
        fetchUrl={requests.fetchDocumentaries}
        isLargeRow={true}/>
         <Row
        title="HORROR"
        fetchUrl={requests.fetchHorrorMovies}
        isLargeRow={true}/>
         <Row
        title="ROMANCE MOVIES"
        fetchUrl={requests.fetchRomanceMovies}
        isLargeRow={true}/>
         <Row
        title="TV SHOWS"
        fetchUrl={requests.fetchTvShow}
        isLargeRow={true}/>
          <Row
        title="TOP RATED MOVIES"
        fetchUrl={requests.fetchTopRatedMovies} 
        isLargeRow={true}/>
    </div>
  )
}

export default RowList