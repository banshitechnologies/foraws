
import axios from 'axios';
import React, { useEffect } from 'react';
import { MdSend } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useHorizontalScroll } from '../Components/SideScroll.jsx';


import '../css/products.css'
function Products() {
    const scrollRef = useHorizontalScroll();
    const dispatch = useDispatch();
    const { packageame } = useSelector((state) => state.order);
    const { allProducts } = useSelector((state) => state.products);

    //  Start Get Alll packages

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getAllPackage = async() => {
       await axios.get('api/packages/getallpackages').then(function (response) {
                // handle success
                dispatch({
                    type: "getProducts",
                    payload: response.data
                });
                dispatch({
                    type:"packageName",
                    payload: response.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    //  start get all package details by package name
    const getpackagedata = async(e,packageName)=>{
        await axios.post('api/packages/getallpackagebytitle',{
            packagetitle:packageName
        }).then((res)=>{
            dispatch({
                type: "getPackages",
                payload: res.data
            })
        }).catch((err)=>{
            throw(err);
        });
        
    }

    useEffect(() => {
        getAllPackage();
      
    })
    

    return (
        <div>
            <div className="row">
                <div className="col-md-8">
                    <div className="row">
                    <div className="productHeader">
                    <h1>Products</h1>
                </div>
                <nav aria-label="breadcrumb" className='cumb-margin-left mt-3'>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item" ><a href="/" className='text-decoration-none'>Home</a></li>
                        <li className="breadcrumb-item"><a href="/" className='text-decoration-none'>Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
                <div className="ourServices" ref={scrollRef}>
                    <div className='services_holder'>
                       {
                        packageame ? packageame.map((name,key)=>(
                            <span key={key} onClick={(e)=>getpackagedata(e,name.packagetitle)}>{name.packagetitle}</span>
                        )): null
                       }
                    </div>

                </div>

                <h3 className="text-center mt-3 mb-3">Packages</h3>
                                    {/* first package */}
                       {
                          allProducts.length !== 0 ? <div className="col-md-4 col-sm-6">
                          <div className="pricing-table-3 basic">
                              <div className="pricing-table-header">
                                  <h4><strong>{allProducts[0].packagebody[0].name}</strong></h4>
                                  <p>Loerm Ipsum Donor Sit Amet</p>
                              </div>
                              <div className="price"><strong>${allProducts[0].packagebody[0].price}</strong> / PROJECT</div>
                              <div className="pricing-body">
                                  <ul className="pricing-table-ul">
                                        {
                                           <li><i><MdSend /></i>{allProducts[0].packagebody[0].offers}</li>
                                        }
  
                                  </ul><Link className="view-more">Buy Now</Link></div>
                          </div>
                      </div>  : null
                        
                       }

                       {/*  Second Package */}
                       {
                          allProducts.length >=1 ? <div className="col-md-4 col-sm-6">
                          <div className="pricing-table-3 basic">
                              <div className="pricing-table-header">
                                  <h4><strong>{allProducts[0].packagebody[1].name}</strong></h4>
                                  <p>Loerm Ipsum Donor Sit Amet</p>
                              </div>
                              <div className="price"><strong>${allProducts[0].packagebody[1].price}</strong> / PROJECT</div>
                              <div className="pricing-body">
                                  <ul className="pricing-table-ul">
                                        {
                                           <li><i><MdSend /></i>{allProducts[0].packagebody[1].offers}</li>
                                        }
  
                                  </ul><Link className="view-more">Buy Now</Link></div>
                          </div>
                      </div>  : null
                       }

                       {/* Start Third Package */}
                    {
                          allProducts.length >=2 ? <div className="col-md-4 col-sm-6">
                          <div className="pricing-table-3 basic">
                              <div className="pricing-table-header">
                                  <h4><strong>{allProducts[0].packagebody[2].name}</strong></h4>
                                  <p>Loerm Ipsum Donor Sit Amet</p>
                              </div>
                              <div className="price"><strong>${allProducts[0].packagebody[2].price}</strong> / PROJECT</div>
                              <div className="pricing-body">
                                  <ul className="pricing-table-ul">
                                        {
                                           <li><i><MdSend /></i>{allProducts[0].packagebody[2].offers}</li>
                                        }
  
                                  </ul><Link className="view-more">Buy Now</Link></div>
                          </div>
                      </div>  : null
                       }
                    </div>    
                </div>
            </div>
        </div>
    )
}

export default Products;
