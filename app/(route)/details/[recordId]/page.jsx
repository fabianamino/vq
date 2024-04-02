'use client'

import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi';
import ModelsSuggestionList from '../_components/ModelsSuggestionList';
import ModelDetail from '../_components/ModelDetail';


export default function Details({params}) {
    const [model, setModel] = useState();
    useEffect(()=>{
        getModelById();
    }, [])

    const getModelById = () => {
        GlobalApi.getModelById(params.recordId).then(res => {
            setModel(res.data.data);
        })

    }
  return (
    <div className='container p-5 md:px-10 flex'>
    <h2 className='font-bold text-[22px]'></h2>
    <div className='grid grid-cols-1 lg:grid-cols-4 '>
      {/* Doctor Detail  */}
      <div className=' col-span-3'>
      {model&& <ModelDetail model={model} />}
       
      </div>
      {/* Doctor Suggestion  */}
      <div>
        <ModelsSuggestionList />
      </div>
    </div>
  </div>

)
}
