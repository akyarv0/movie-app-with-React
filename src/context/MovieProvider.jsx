import React, { Children, createContext, useContext } from 'react'

const MovieContext = createContext

export const useMovieContext = () => {
    return useContext(MovieContext)
}
            

const MovieProvider = ({children}) => {
  return (
    <MovieContext.Provider value={null}>{children}</MovieContext.Provider>
  )
}

export default MovieProvider