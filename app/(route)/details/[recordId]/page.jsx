'use client'

import React, { useEffect, useState } from 'react'
import GlobalApi from '../../../_utils/GlobalApi';
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
    <div className='container mt-10'>
        <h2 className='font-bold text-3xl my-5'>Model Details</h2>
        <div className='grid grid-cols-1 md:grid-cols-4'>
            <div className='col-span-2'>            {model && <ModelDetail model={model}/> }
</div>
            <div></div>
        </div>



    </div>
  )
}
