import React from "react";
import "./adminProductList.scss";
import AdminNavBar from "../../../components/admin/adminNavBar/AdminNavBar";
import AdminLeftBar from "../../../components/admin/adminLeftBar/AdminLeftBar";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../../../data/fakeProductList";

function AdminProductList() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  return (
    <div className="product-list-container">
      <AdminNavBar />
      <div className="product-list-bottom">
        <AdminLeftBar />
        <div className="bottom-right">
          <h1>Product Management</h1>
          <div style={{ height: "70vh", width: "100%" }}>
            <DataGrid
              rows={productRows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductList;
