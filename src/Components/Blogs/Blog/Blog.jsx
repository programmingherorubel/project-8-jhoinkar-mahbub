import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Blog = ({blog,addBlogHandeler,handelTime}) => {
    const {blogImg,userLogo,userName,date,title,tags,time}=blog

    

    return (
        <div className='mt-4 p-3 '>
            {/* user  */}
            <img src={blogImg} className='img-fluid' alt="" />
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}} className='p-3'>
                <div style={{display:'flex',justifyContent:'center',alignItems:'cenetr'}}>
                    <img src={userLogo} style={{width:'50px',height:'50px',borderRadius:'50%'}} alt="" />
                    <div style={{marginLeft:'10px'}}>
                        <h5>{userName}</h5>
                        <span style={{color:'gray'}}>{date}</span>
                    </div>
                </div>
                <span style={{color:'gray'}}>{time} min read <FontAwesomeIcon style={{cursor:'pointer'}} onClick={()=> addBlogHandeler(blog)} icon={faBookmark} /></span>
            </div>
            <h3>{title}</h3>
            <div style={{display:'flex'}}>{
                tags.map(tag => {
                    return <>
                        <span style={{color:'gray',margin:'0px 5px'}}>#{tag}</span>
                    </>
                })
            }</div>
            <h6 onClick={()=> handelTime(time)} style={{color:'#6047EC',textDecoration:'underline',cursor:'pointer'}}>Mark as read</h6>
        </div>
    );
};

export default Blog;