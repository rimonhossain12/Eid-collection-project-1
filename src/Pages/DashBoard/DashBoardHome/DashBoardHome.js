import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './DashBoardHome.css';

const DashBoardHome = () => {
    const { isAdmin } = useAuth();
    return (
       <div className='dashboard'>
            <div className="dashboard-container">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-3 text-secondary text-start link-div dashboard-link">
                        <h6 className='text-uppercase fw-bold mt-2 text-center'>User Dashboard</h6>
                        <ul>
                            <li>
                                <i class="fas fa-user-circle" style={{ color: 'dark' }}></i>
                                <Link className='list-style' to="/DashBoard">My Profile</Link>
                            </li>
                            <li>
                                <i class="fas fa-shopping-cart"></i>
                                <Link className='list-style' to="/DashBoard/userOrder">My Orders</Link>
                            </li>
                            <li>
                                <i class="far fa-comment-dots"></i>
                                <Link className='list-style' to="/DashBoard/userReview">Review</Link>
                            </li>
                            {
                                isAdmin && <>
                                    <li>
                                        <i class="fas fa-th-list"></i>
                                        <Link className='list-style' to="/DashBoard/allOrders">All Orders</Link>
                                    </li>
                                    <li>
                                        <i class="fas fa-book-reader"></i>
                                        <Link className='list-style' to="/DashBoard/addProducts">Add Products</Link>
                                    </li>
                                    <li>
                                        <i class="fas fa-book-reader"></i>
                                        <Link className='list-style' to="/DashBoard/makeAdmin">Make Admin</Link>
                                    </li>
                                </>
                            }
                        </ul>
                    </div>
                    <div className='col-sm-12 col-md-6 col-lg-9 text-start dashboard-link-div'>
                        <Outlet></Outlet>
                        {
                            isAdmin && <>
                                <output></output>
                                <output></output>
                                <output></output>
                            </>
                        }
                    </div>
                </div>
            </div>
       </div>
    );
};

export default DashBoardHome;