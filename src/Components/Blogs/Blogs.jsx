import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BookMark from '../BookMark/BookMark';
import Time from '../Time/Time';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs,setBlogs]=useState([])
    const [selectBlog,setSelectBlog]=useState([])
    const [time,setTime]=useState([])

    useEffect(()=>{
        fetch('information.JSON')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    // add to cart 
    const handelTime = (information)=>{
        setTime([...time,information])
        toast.success('read Minutes added', {
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }


    
    const addBlogHandeler = (totalBlog)=>{
        const toeastAlert = selectBlog.find(temp => temp.title === totalBlog.title )
        if(toeastAlert){
    
            toast.error('This Blog already added', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
        }else{
            setSelectBlog([...selectBlog,totalBlog])
        }
    }


    return (
        <Container>
            <Row className='mt-2'>
                <Col md={8}>
                    <Row>
                        {
                            blogs.map((blog,index) => <Blog handelTime={handelTime} addBlogHandeler={addBlogHandeler} blog={blog}  key={index} />)
                        }
                    </Row>
                </Col>
                <Col md={4}>
                    <Time time={time} />
                    <BookMark selectBlog={selectBlog} />
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;