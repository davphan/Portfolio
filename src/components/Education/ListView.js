import React, { useMemo, useState } from "react";
import styled, { useTheme } from "styled-components";
import { education } from "../../data/text";
import { Table, TableRow, TableBody, TableCell, TableHead, TablePagination, TableSortLabel, capitalize } from "@mui/material";

const ListViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;


  @media screen and (max-width: 768px) {
    margin: 0 70px;
  }
`;

const HeaderText = styled.div`
  font-weight: 400;
`;

const years = {
  "freshman": 0,
  "sophomore": 1,
  "junior": 2,
  "senior": 3
};

const quarters = {
  "autumn": 0,
  "winter": 0.1,
  "spring": 0.2
};

export default function ListView() {
  const theme = useTheme();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("code");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const classList = Object.values(education.coursework).flat().map(({ series, courses }) => courses.map((course) => ({...course, "series": series}))).flat().map((course, index) => ({"id": index, ...course}));

  const visibleRows = useMemo(
    () =>
      classList.sort((a, b) => {
        if (orderBy === "date") {
          a = years[a.year] + quarters[a.quarter];
          b = years[b.year] + quarters[b.quarter];
          return order === "asc" ? a - b : b - a;
        } else {
          let x = order === "asc" ? a[orderBy] : b[orderBy];
          let y = order === "asc" ? b[orderBy] : a[orderBy];
          x = x ? x : "-";
          y = y ? y : "-";
          return x.replace(/\s/g,'') < y.replace(/\s/g,'') ? -1 : 1;
        }
      }).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage),
    [order, orderBy, page, rowsPerPage]
  );

  const headCells = [
    {
      id: "code",
      label: "Course Code"
    },
    {
      id: "series",
      label: "Course Series"
    },
    {
      id: "date",
      label: "Date"
    },
    {
      id: "details",
      label: "Details"
    }
  ]

  return (
    <ListViewContainer>
      <TablePagination
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[10, 25, {label: "All", value: classList.length}]}
        onRowsPerPageChange={(event) => {
          setRowsPerPage(parseInt(event.target.value, 10));
          setPage(0);
        }}
        count={classList.length}
        page={page}
        onPageChange={(_, newPage) => setPage(newPage)}
        component="div"
      />
      <Table>
        <TableHead>
          <TableRow
            key={"head"}
          >
          {headCells.map((headCell) => (
            <TableCell sx={{color: theme.primary_dark, textWrap: "nowrap"}}>
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={order}
                onClick={() => {
                  orderBy === headCell.id
                    ? setOrder(order === "asc" ? "desc" : "asc")
                    : setOrder("desc");
                  setOrderBy(headCell.id);
                }}
                hideSortIcon={true}
              >
              {headCell.label}
              </TableSortLabel>
            </TableCell>
          ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {visibleRows.map((row) => (
          <TableRow
            hover
            key={row.id}
          >
            <TableCell>{row.code}</TableCell>
            <TableCell>{row.series}</TableCell>
            <TableCell>{row.quarter.charAt(0).toUpperCase() + row.quarter.slice(1)}, {capitalize(row.year)} Year</TableCell>
            <TableCell>{row.details ? row.details : "-"}</TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </ListViewContainer>
  );
}
