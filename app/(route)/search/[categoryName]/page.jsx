'use client'

import React, {useEffect} from 'react'

const CategoryPage = ({params}) => {
    useEffect(()=>{
        console.log(params)
    }, [])
  return (
    <div>page</div>
  )
}

export default CategoryPage;