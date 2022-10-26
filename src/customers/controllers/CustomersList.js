import React from "react";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Redirect, Link } from "react-router-dom";

const CustomersList = (props) => {
  const columns = [
    { field: "id", headerName: "ID", width: 250 },
    {
      field: "userName",
      headerName: "Username",
      width: 150,
      editable: false,
    },
    // {
    //   field: "Link",
    //   renderCell: (cellValues) => {
    //     return <Link href={`#${cellValues.row.url}`}>Link</Link>;
    //   },
    // },
  ];

  const rows = [];
  props.items.map((item) => {
    let user = { id: item._id, userName: item.username };
    rows.push(user);
  });
  return (
    <>
      <Box sx={{ height: 400, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={20}
          rowsPerPageOptions={[20]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </>
  );
};

export default CustomersList;
