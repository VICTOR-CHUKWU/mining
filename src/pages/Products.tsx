import React from 'react'
import { Header, RockSlider } from '@/components/products'
import { PRODUCTS } from '@/data'

const ProductsPage = () => {
    return (
        <div>
            <Header />
            <RockSlider head='Rocks' data={PRODUCTS} />
            <RockSlider head='Solid materials' isRight data={PRODUCTS} />
        </div>
    )
}

export default ProductsPage