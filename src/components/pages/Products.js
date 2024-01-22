import React from 'react';
import '../../App.css';
import GoogleForm from '../GoogleForm'; 
import Footer from '../Footer'; 
const Products = () => {
  return (
    <div>
     
      <GoogleForm /> {/* Include the GoogleForm component */}
      <Footer /> {/* Render the Footer component */}
    </div>
  );
};

export default Products;
