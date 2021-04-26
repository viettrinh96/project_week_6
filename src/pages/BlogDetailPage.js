import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function BlogDetailPage() {
  const blogs = useSelector((state) => state.blog.blogs);
  console.log("data", blogs);
  return (
    <div>
      <Row>
        {blogs.map((blog) => (
          <Col xs={4} className="mb-4">
            <Card style={{ width: "18rem" }} key={blog._id}>
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
    </div>
  );
}
