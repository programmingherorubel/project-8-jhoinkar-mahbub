import React from 'react';

const CartItem = ({selectBlog}) => {
    
    return (
        <>
            <h3 style={{padding:'8px',background:'white'}}>Bookmarked Blogs : {selectBlog.length}</h3>
            {
                selectBlog.map(blog => <h4 style={{marginTop:'10px',background:'white',padding:'8px'}}>{blog.title}</h4>)
            }
        </>
    );
};export default CartItem;