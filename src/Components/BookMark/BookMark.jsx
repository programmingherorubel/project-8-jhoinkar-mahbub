import React from 'react';
import CartItem from '../CartItem/CartItem';


const BookMark = ({selectBlog}) => {

    return (
        <div style={{background:'rgb(230, 228, 228)',position:'sticky',top:'180px'}} className='mt-3 p-3'>
                <CartItem selectBlog={selectBlog} />
        </div>
    );
};

export default BookMark;