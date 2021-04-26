import React from "react";
// import Loader from "../components/Loader";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import blogActions from "../redux/actions/blog.actions";
import { ClipLoader } from "react-spinners";
import { Card, Container, Button, Row, Col } from "react-bootstrap";
import PaginationBar from "../components/PaginationBar";

const HomePage = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log(blogs);
  const totalPageNum = useSelector((state) => state.blog.totalPageNum);
  const loading = useSelector((state) => state.blog.loading);
  const [pageNum, setPageNum] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(blogActions.blogsRequest(pageNum));
  }, [dispatch, pageNum]);

  return (
    <Container fluid>
      <Row className="d-flex justify-content-center mt-2">
        <PaginationBar
          pageNum={pageNum}
          setPageNum={setPageNum}
          totalPageNum={totalPageNum}
        />
      </Row>
      {loading ? (
        <div className="text-center">
          <ClipLoader color="red" size={150} loading={true} />
        </div>
      ) : (
        <>
          {blogs.length > 0 ? (
            <Row>
              {blogs.map((blog) => (
                <Col key={blog._id} xs={4} className="mb-4">
                  <Card style={({ width: "18rem" }, { height: "38rem" })}>
                    <Card.Img variant="top" src={blog.images[0]} />
                    <Card.Body>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.content}</Card.Text>
                      <Button variant="primary">View Post</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          ) : (
            <p>There are no blogs</p>
          )}
        </>
      )}
    </Container>
  );
};

export default HomePage;
