import React from 'react'
import { json, Link } from 'react-router-dom'
import { useGetAllProductsQuery } from '../../services/ProductsApi'
import DashBoard from './DashBoard'
import TopCategory from './TopCategory'
import DashBanner from './DashBanner'
import { MdOutlineCategory } from 'react-icons/md'
import { GiClothes, GiClothesline } from 'react-icons/gi'
const Home = () => {
  const { data, isError, isLoading, isSuccess } = useGetAllProductsQuery({ offset: 0, limit: 20 })

  return (
    <div className='relative'>
      <DashBoard data={data} isError={isError} isLoading={isLoading} isSuccess={isSuccess} />
      {isSuccess ? <div className=''>
        <TopCategory categoryNum={1} categoryTitle="clothing" />
        <TopCategory categoryNum={2} categoryTitle="electronics" />
        <DashBanner title={'Check out our Catalogue '} description={'List of categories that will provide you with a great selection of products that fit you needs and maybe even find something that you might not have thought you needed before ....'} IconName={MdOutlineCategory} link={'categories'} />
        <TopCategory categoryNum={3} categoryTitle="furniture" />
        <TopCategory categoryNum={4} categoryTitle="shoes" />
        <DashBanner title={'Products Selected just for you! '} description={'A selection of products specific to your taste saving you time in searching ...'} IconName={GiClothesline} link={'products'} />
        <TopCategory categoryNum={5} categoryTitle="others" />
      </div> : null}

    </div>
  )
}

export default Home
