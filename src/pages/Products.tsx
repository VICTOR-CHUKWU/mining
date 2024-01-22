import React from 'react'
import { Header, RockSlider } from '@/components/products'
import { PRODUCTS, SOLIDMINERAL } from '@/data'

const ProductsPage = () => {
    return (
        <div>
            <Header />
            <RockSlider head='Rocks' data={PRODUCTS} />
            <RockSlider head='Solid materials' isRight data={SOLIDMINERAL} />
        </div>
    )
}

export default ProductsPage