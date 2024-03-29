import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";
import PublicNavbar from "../components/PublicNavbar";
import SideMenu from "../components/SideMenu";
import AddEditBlogPage from "../pages/AddEditBlogPage";
import BlogListPage from "../pages/Admin/BlogListPage";
import FriendListPage from "../pages/Admin/FriendListPage";
import ProfilePage from "../pages/Admin/ProfilePage";
import BlogDetailPage from "../pages/BlogDetailPage";
import NotFoundPage from "../pages/NotFoundPage";

const AdminLayout = () => {
  return (
    <>
      <PublicNavbar />
      <Container fluid>
        <Row>
          <Col md={3} lg={2}>
            <SideMenu />
          </Col>
          <Col md={9} lg={10}>
            <Switch>
              <Route exact path="/admin/profile" component={ProfilePage} />
              <Route exact path="/admin/friends" component={FriendListPage} />
              <Route exact path="/admin/blogs" component={BlogListPage} />
              <Route exact path="/admin/blogs/:id" component={BlogDetailPage} />
              <Route exact path="/admin/blog/add" component={AddEditBlogPage} />
              <Route
                exact
                path="/admin/blog/edit/:id"
                component={AddEditBlogPage}
              />
              {/* <Route exact path="/admin/messenger" component={MessengerPage} /> */}
              <Route component={NotFoundPage} />
            </Switch>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default AdminLayout;
