import React from 'react'
import {getSingleProduct, insertPostData} from "../api/productApi.js";
import {useActionData, useLoaderData} from "react-router-dom";
export default function Product() {
    const product =useLoaderData();
    const actionData=useActionData();
    return (
        <>
            <h1>{product.id}</h1>
            <h3>{product.title}</h3>
            <h6>{product.description}</h6>
            <h4>{product.price}</h4>
        </>
    )
    
}
export function loader ({ params }) {
    return getSingleProduct(params.id)
}

export function action({ params ,request }) {
    return insertPostData(params.id ,request.body)
}