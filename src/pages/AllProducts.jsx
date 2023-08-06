import {useLoaderData} from "react-router-dom";


export default function AllProducts() {
    const photos = useLoaderData()
    return (
        <>
        allproducts
            {photos.length >= 1 ?(photos.map((photo) => {
                return (
                    <div key={photo.id}>
                        <h1>{photo.id}</h1>
                        <h3>{photo.title}</h3>
                        <img src={photo.url}/>
                    </div>
                )})) : <h2 className="text-center p-5">...لا يوجد منتجات</h2>
            }
        </>
    )
}
