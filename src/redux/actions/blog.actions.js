import * as types from "../constants/blog.constants";
import api from "../../apiService";
import { useParams } from "react-router-dom";
// import { toast } from "react-toastify";
// the middleware functions will be here

const blogsRequest = (pageNum) => async (dispatch) => {
  dispatch({ type: types.GET_BLOGS_REQUEST, payload: null });
  try {
    const res = await api.get(`api/blogs/?page=${pageNum}`);
    dispatch({ type: types.GET_BLOGS_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_BLOGS_FAILURE, payload: null });
  }
};

const detailRequest = () => async (dispatch) => {
  dispatch({ type: types.GET_DETAIL_REQUEST, payload: null });
  try {
    const id = useParams();
    const res = await api.get(`api/blogs/${id}`);
    dispatch({ type: types.GET_DETAIL_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: types.GET_DETAIL_FAILURE, payload: null });
  }
};

const blogActions = { blogsRequest, detailRequest };
export default blogActions;
