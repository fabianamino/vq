'use client'
import React, {useEffect, useState} from 'react';
import GlobalApi from '../../../_utils/GlobalApi';
import ModelList from '../../../_component/ModelList';
import Loader from '../_components/Loader';

const SearchPage = ({params}) => {
  const [loading, setLoading] = useState(true);
  const [modelList, setModelList] = useState([]);
  useEffect(()=>{
    getModels();
  }, [])

  const getModels = () => {
    GlobalApi.getModelByCategory(params.categoryName).then(res => {
      setModelList(res.data.data);
      setLoading(false);
    })
    
  }

  return (
    <div>
     {loading && <Loader />}
      <ModelList heading={params.categoryName.replace(/_/g, ' ')} 
      modelList = {modelList}/>

    </div>
  )
}

export default SearchPage;