import React, { memo, useEffect, useMemo, useState } from 'react'
import { GET_COLORS_API, GET_MATERIAL_API, GET_PRODUCTS_API } from '../../Api/ApiServices'

import Cards from '../Cards/Cards'
import "./Products.scss"
import { IoMdClose } from "react-icons/io";
import SideBar from '../Sidebar/SideBar'

const filteredProductsDef = (products = [], selectedColor, selectedMaterial) => {
    let filteredProducts = [...products];

    if (selectedColor.length > 0 && selectedMaterial.length > 0) {
        filteredProducts = products.filter(({ color, material }) => color === selectedColor && material === selectedMaterial);
    } else if (selectedColor.length > 0) {
        filteredProducts = products.filter(({ color }) => color === selectedColor);
    } else if (selectedMaterial.length > 0) {
        filteredProducts = products.filter(({ material }) => material === selectedMaterial);
    } else {
        console.log('No filters selected');
    }

    return filteredProducts
}

const itemsPerPage = 6;

function Products() {
    const [productsList, setProductsList] = useState([])
    const [colorList, setColorList] = useState([])
    const [materialList, setMaterialList] = useState([])
    const [selectedFilters, setSelectedFilters] = useState({
        selectedColor: '',
        selectedMaterial: ''
    })

    const [currentPage, setCurrentPage] = useState(1);



    useEffect(() => {

        const apiData = Promise.allSettled([GET_PRODUCTS_API(), GET_COLORS_API(), GET_MATERIAL_API()])
        apiData.then(res => {
            const [products, colors, materials] = res;
            if (products.status == "fulfilled") {
                setProductsList(products.value.data.products.map(e => {
                    let col = colors.value.data.colors.find(color => color.id == e.colorId);
                    if (col) e['color'] = col.name

                    let mat = materials.value.data.material.find(material => material.id == e.materialId)
                    if (mat) e['material'] = mat.name
                    return e
                }))

            }

            setColorList(colors.value.data.colors)
            setMaterialList(materials.value.data.material)


        }).catch(err => {
            console.log({ err });
        })

    }, [])


    const products = useMemo(() => {
        return filteredProductsDef(productsList, selectedFilters.selectedColor, selectedFilters.selectedMaterial)
    }, [productsList, selectedFilters])


    const clearFilter = (key) => {
        setSelectedFilters(prev => ({
            ...prev,
            [key]: ""
        }))
    }

    //pagination
    const totalPages = Math.ceil(products.length / itemsPerPage);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    //


    return (
        <div className='productcontainer row container-fluid'>
            <div className='col-md-2'>
                <SideBar colors={colorList} materials={materialList} setSelectedFilters={setSelectedFilters} />
            </div>
            <div className='itemcontainer col-md-10'>
                <div className="item row">
                    <div>
                        {selectedFilters.selectedColor && <button className='filterbutton'>{selectedFilters.selectedColor} <IoMdClose onClick={() => clearFilter("selectedColor")} /></button>}
                        {selectedFilters.selectedMaterial && <button className='filterbutton'>{selectedFilters.selectedMaterial} <IoMdClose onClick={() => clearFilter("selectedMaterial")} /></button>}

                    </div>
                    {currentItems.map(e => { return <div key={e.id} className="col-md-4"><Cards item={e} /></div> })}

                </div>
                <div className='pagnationBtn'>
                    {Array.from({ length: totalPages }).map((_,index) => (
                        <button key={index} onClick={() => handlePageChange(index + 1)} className={index+1==currentPage ? "activebutton":""}>
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products