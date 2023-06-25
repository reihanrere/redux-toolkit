import React from "react";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserList } from "../../redux/actions/users";
import DataTable from "../../components/datatable";
import Loading from "../../components/loading";

function UsersPage() {
  const dispatch = useDispatch();
  // redux selector
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  // state
  const [page, setPage] = useState(1);

  //functions
  const getApiUsersList = () => {
    dispatch(
      getUserList({
        per_page: 5,
        page: page,
      })
    );
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    console.log(users);
    if (page < users?.data?.total_pages) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    getApiUsersList();
  }, [page]);

  return (
    <Container sx={{ marginTop: 5 }}>
      <DataTable
        data={users?.data?.data}
        pageNumber={page}
        isLoading={isLoading}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </Container>
  );
}

export default UsersPage;
