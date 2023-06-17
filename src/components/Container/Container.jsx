import React from 'react'

export const Container = ({children}) => {
    return (
      <div className='container min-h-screen mx-auto'>
          {children}
      </div>
    )
  }