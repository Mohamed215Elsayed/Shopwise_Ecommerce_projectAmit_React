import React, { useState, useEffect } from "react";
import "./Products.css";
import ProductCard from "./Card/ProductCard";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function Products() {
  const settings = {
    slidesToShow: 1,
    fade: true,
    speed: 1000,
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const apiURL = `https://fakestoreapi.com`;
  const [Products, setProducts] = useState([]);
  const [allCategories, setCategories] = useState([]);
  // const [totalNumberOfProducts, setTotalNumberOfProducts] = useState(100);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5);
 

  const getProducts = async () => {// get all products
    const response = await axios.get(`${apiURL}/products`);
    return response.data;
  };
  const getAllCategories = async () => {// get all categories
    const response = await axios.get(`${apiURL}/products/categories`);
    return response.data;
  };
  const getProductsByCategory = async (category = 'all') => {
    if (category !== 'all') {
      const response = await axios.get(`${apiURL}/products/category/${category}`);
      return response.data;
    } else {
      const response = await axios.get(`${apiURL}/products`);
      return response.data;
    }
  };
  const sortProducts = (sortType) => {
    const sortedProducts = [...Products].sort((a, b) => {
      return sortType === 'asc' ? a.price - b.price : b.price - a.price;
    });
    setProducts(sortedProducts);
  };
  const getCurrentPage = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return Products.slice(startIndex, endIndex);
  }
  
  // const searchProducts = async (query) => {
  //   const response = await axios.get(`${apiURL}/products/search`, {
  //     params: query ? { q: query } : {},
  //   });
  //   return response.data.products;
  // };
 

  // const getProductById = async (id) => {
  //   return axios.get(`${apiURL}/products/${id}`).then((res) => res.data);
  // };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const products = await getProducts();
        setProducts(products);
        console.log(products);
      } catch (error) {
        console.log(error);
      }
  
      try {
        const categories = await getAllCategories();
        setCategories(categories);
        console.log(categories);
      } catch (error) {
        console.log(error);
      }
        
      try {
        const categoryProducts = await getProductsByCategory(); 
        setProducts(categoryProducts);
      } catch (error) {
        console.log(error);
      }
  }
    fetchData();
  }, []);

  return (
    <>
      <section className="container my-12">
        <h2 className="section-title text-center">Exclusive Products</h2>
        <div className="filters my-10 flex flex-wrap items-center justify-center gap-5">
          <select
            // onChange={(e) => getProductsByCategory(e.target.value)}
            name=""
            id=""
            defaultValue="" 
            value=""
          >
            <option selected disabled value="">
              Filter by category
            </option>
            {allCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>

          <select
            onChange={(e) => sortProducts(e.target.value)}
            name=""
            id=""
            defaultValue="" 
           
          >
            <option selected disabled value="">
              Sort by
            </option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
        <div className="grid2 my-10 flex flex-wrap items-stretch justify-center gap-6 pb-10">
        <Slider {...settings}>
          {Products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </Slider>
        </div>
        <div className="flex justify-center bg-black">
        {/* <Slider {...settings}/> */}
        <pagination-controls className="my-pagination "
        onPageChange={getCurrentPage}
          /> 
        </div>
       
      </section>
    </>
  );
}

export default Products;
