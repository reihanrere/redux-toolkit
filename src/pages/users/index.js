import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserList } from "../../redux/actions/users";
import DataTable from "../../components/datatable";
import { useNavigate } from "react-router-dom";

function UsersPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // redux selector
  const users = useSelector((state) => state.users);
  const isLoading = useSelector((state) => state.users.isLoading);

  // state
  const [page, setPage] = useState(1);

  //functions
  const getApiUsersList = () => {
    try {
      dispatch(
        getUserList({
          per_page: 5,
          page: page,
        })
      );
    } catch (error) {
      console.log(error);
    }
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
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={12}>
        <DataTable
          data={users?.data?.data}
          pageNumber={page}
          isLoading={isLoading}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <Button variant="outlined" onClick={() => navigate("/create")}>
          Create
        </Button>
      </Grid>
    </Grid>
  );
}

export default UsersPage;
