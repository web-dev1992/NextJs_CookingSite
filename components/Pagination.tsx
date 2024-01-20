"use client";
import { FC, useState, useEffect, ChangeEvent } from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import service from "../services";

interface IAppPaginationProps {
  setItems: (blog: any) => void;
}

const pageSize = 6;

const AppPagination: FC<IAppPaginationProps> = (props) => {

  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });

  useEffect(() => {
    service
      .getData({ from: pagination.from, to: pagination.to })
      .then((response) => {
        setPagination({ ...pagination, count: response.count });
        props.setItems(response.data);
      });
  }, [pagination.from, pagination.to]);
  const handlePageChange = (event: ChangeEvent<unknown>, page: number) => {
    const from = (page - 1) * pageSize;
    const to = (page - 1) * pageSize + pageSize;
    setPagination({ ...pagination, from, to });
    window.scroll(0, 0);
  };
  return (
    <Pagination
      count={Math.ceil(pagination.count / pageSize)}
      onChange={handlePageChange}
      
      renderItem={(item) => (
        <PaginationItem
          sx={{
            color: "#000",
            backgroundColor: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            border: "1px solid #e7e5e4",
            fontWeight: "700",
            fontSize: "18px",
            margin: "0px 8px",
            "&.Mui-selected": { color: "#fff", backgroundColor: "#000" },
          }}
          components={{
            next: (props) => <a {...props}>)</a>,
            previous: (props) => <a {...props}>(</a>,
          }}
          {...item}
        />
      )}
    />
  );
};

export default AppPagination;
