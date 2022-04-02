import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function DataFromApi() {
    const [product, setProduct] = useState([]);
    //when useEffect runs?
    useEffect(() => {
        const init = async () => {
            try {
                const response = await axios.get('http://fsimdbbackend-env.eba-6xb8tzsg.ap-south-1.elasticbeanstalk.com/title-basics/');
                console.log(response);
                setProduct(response.data)
                console.log(setProduct)
            } catch (error) {
                console.error(error);
            }
        };


        init();
    }, []);



    return (
        <div>
            <h1>Data from API</h1>
            <div>
                
                DATA UPDATE=>>> {product.map((item, a) => <p>{item.tid} {item.primaryTitle} Index: {a} </p>)}
                {/* Leaning react hooks! */}
                {/* plz explain difference between both state on line 49 and 50 */}
            </div>

        </div>
    )
}
