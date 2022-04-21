import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Ladie from '../Ladie/Ladie';

const Ladies = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                console.log(data);
            })
    }, [])
    return (
       <div>
           <div className='mt-5'>
                <h4>This is the Best EID Collections for woman</h4>
           </div>
           <div>
               <div className='container'>
                    <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            products.map(product => <Ladie key={product._id}
                                product={product}
                            ></Ladie>)
                        }
                    </Row>

               </div>
           </div>
       </div>
    );
};

export default Ladies;