import React from "react";
import Pagination from "react-bootstrap/Pagination";
export default function PaginationBar(props) {
  const handleClickOnFirst = () => {
    props.setPageNum(1);
  };
  const handleClickOnPrev = () => {
    props.setPageNum((num) => num - 1);
  };
  const handleClickOnNext = () => {
    props.setPageNum((num) => num + 1);
  };

  const handleClickOnLast = () => {
    props.setPageNum(props.totalPageNum);
  };

  const handleClickOnItem = (num) => {
    props.setPageNum(parseInt(num.target.textContent));
  };
  console.log(props.pageNum);
  return (
    <Pagination
      className="ml-3 d-flex justify-content-center"
      variant="info"
      bg="info"
    >
      <Pagination.First
        disabled={props.pageNum === 1}
        onClick={handleClickOnFirst}
      />
      <Pagination.Prev
        disabled={props.pageNum === 1}
        onClick={handleClickOnPrev}
      />
      <Pagination.Item active={props.pageNum === 1} onClick={handleClickOnItem}>
        {1}
      </Pagination.Item>
      {props.pageNum > 2 && <Pagination.Ellipsis />}
      {props.pageNum > 1 && props.pageNum < props.totalPageNum && (
        <Pagination.Item active onClick={handleClickOnItem}>
          {props.pageNum}
        </Pagination.Item>
      )}
      {props.pageNum < props.totalPageNum - 1 && <Pagination.Ellipsis />}
      {props.totalPageNum > 1 && (
        <Pagination.Item
          active={props.pageNum === props.totalPageNum}
          onClick={handleClickOnItem}
        >
          {" "}
          {props.totalPageNum}
        </Pagination.Item>
      )}
      <Pagination.Next
        disabled={props.pageNum === props.totalPageNum}
        onClick={handleClickOnNext}
      />
      <Pagination.Last
        disabled={props.pageNum === props.totalPageNum}
        onClick={handleClickOnLast}
      />
    </Pagination>
  );
}
