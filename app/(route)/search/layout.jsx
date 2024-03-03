import React from 'react';
import CategoryList from './_components/CategoryList';

const SearchLayout = ({children}) => {
  return (
    <div>
<div class="container grid grid-cols-1 gap-4 lg:grid-cols-5 lg:gap-8 my-10">
  <div class="h-fit rounded-lg border border-primary shadow-sm">
        <CategoryList/>
  </div>
  <div class="h-screen rounded-lg bg-gray-200 lg:col-span-4 border border-primary">
  {children}
  </div>
</div>
    </div>
  )
}

export default SearchLayout;