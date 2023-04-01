import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { toast } from 'react-toastify';
import BookMark from '../BookMark/BookMark';
import Time from '../Time/Time';
import Blog from './Blog/Blog';
import Accordion from 'react-bootstrap/Accordion';



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
    const handelTime = (hadeltime)=>{
        setTime([...time,hadeltime])
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


    
    const addBlogHandeler = (information)=>{
        const toeastAlert = selectBlog.find(temp => temp.title === information.title )
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
            }
            setSelectBlog([...selectBlog,information])
    }


    return (
        <Container style={{zIndex: '100'}}>
            <Row className='mt-2'>
                <Col md={8}>
                    <Row>
                        {
                            blogs.map((blog,index) => <Blog blog={blog} handelTime={handelTime} addBlogHandeler={addBlogHandeler} key={index} />)
                        }
                    </Row>
                </Col>
                <Col md={4} >
                    <Time time={time} />
                    <BookMark selectBlog={selectBlog} />
                </Col>
            </Row>
            <Row>
                <Col md={8} className="mx-auto mt-5 mb-5">
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>what is the defferens between props and state ? </Accordion.Header>
                            <Accordion.Body>
                            When you try to send value from one component to other you can't change the press. You can change the state then data render newly.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>how to work useState ?</Accordion.Header>
                            <Accordion.Body>
                            State is an object. We can save data in state and anyone can Send state from  one component to another.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>activities of useEffect ? </Accordion.Header>
                            <Accordion.Body>
                                useEffect works by side effects,
                            when the useEffect is changed date will re- render. We can send propose to one component to another. 
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>how doese react work ?</Accordion.Header>
                            <Accordion.Body>
                            THERE are many component on react like nested component and all are used as a Root component and the return "X"

                            And web pack take all the things and convert it. Browser run this simple converted Vanila Javascript.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;