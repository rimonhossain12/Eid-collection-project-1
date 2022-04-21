import React from 'react';
import ReactStars from 'react-rating-stars-component';

const Shoe = ({product}) => {
    const { images, price, name, country, rating } = product;
    return (
        <>
            <div className='mt-2'>
                <div className="shadow p-3 mb-5 bg-body rounded div-height">
                    <div className="image text-start">
                        <div id="zoom-In">
                            <figure>
                                <img id="img-style" src={images} className='img-fluid' style={{ width: '100%' }} alt="" />
                            </figure>
                            <h5 className="fw-lighter" style={{ color: '#22789A' }}>{name}</h5>
                            <h6 className="fw-normal" style={{ color: '#05445D' }}>${price}</h6>
                            <h6 className="fw-normal" style={{ color: '#05445D' }}>
                                <ReactStars
                                    style={{ textAlign: 'center' }}
                                    classNames='user-icon'
                                    size={24}
                                    isHalf={true}
                                    edit={false}
                                    count={Number(rating)}
                                    value={Number(rating)}
                                    activeColor="#ffd700"
                                />
                            </h6>
                            <p className='fw-normal text-start'>{country}</p>
                            {/* <Link to={`/order/${_id}`}> */}
                            <button className="btn-style btn btn-primary badge rounded-pill bg-primary">shop Now</button>
                            {/* </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shoe;