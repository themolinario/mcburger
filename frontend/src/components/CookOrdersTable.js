import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Button, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {}
  })
);

const handleClick = (event, cellValues) => {
  console.log(cellValues.row);
};

const handleCellClick = (param, event) => {
  event.stopPropagation();
};

const handleRowClick = (param, event) => {
  event.stopPropagation();
};

const columns = [
  {
    field: "OrderNumber",
    headerName: "N°",
    width: 100
  },
  { field: "ProductTitle", headerName: "Product Title", width: 250 },
  {
    field: "NotReady",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button id = 'NotReady'
          variant="contained"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          Not Ready
        </Button>
      );
    }
  },
  {
    field: "Preparing",
    width: 300,
    renderCell: (cellValues) => {
      return (
        <Button id = 'Preparing'
                variant="contained"
                onClick={(event) => {
                  handleClick(event, cellValues);
                }}
        >
          Preparing
        </Button>
      );
    }
  },
  {
    field: "Ready",
    width: 150,
    renderCell: (cellValues) => {
      return (
        <Button id = 'Ready'
          variant="contained"
          onClick={(event) => {
            handleClick(event, cellValues);
          }}
        >
          Ready
        </Button>
      );
    }
  }
];

const rows = [
  { id: 1, OrderNumber: "212", ProductTitle: "Hamburger"},
  { id: 2, OrderNumber: "118", ProductTitle: "Fries"},
];

export default function CookOrdersTable() {
  const classes = useStyles();

  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid
        rowHeight={120}
        className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={5}
        onCellClick={handleCellClick}
        onRowClick={handleRowClick}
      />
    </div>
  );
}