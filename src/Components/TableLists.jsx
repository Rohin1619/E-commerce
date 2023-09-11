import React, { useEffect, useMemo, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const TableLists = ({ formData }) => {
    const [columns, setColumns] = useState([
        { id: 'code', label: 'Code', minWidth: 100 },
        { id: 'username', label: 'Username', minWidth: 170 },
        {
            id: 'email',
            label: 'Email',
            minWidth: 170,
            align: 'center',
            format: (value) => value.toLocaleString('en-US'),
        },
    ]);

    useEffect(() => {
        setColumns([
            { id: 'code', label: 'Code', minWidth: 100 },
            { id: 'username', label: 'Username', minWidth: 170 },
            {
                id: 'email',
                label: 'Email',
                minWidth: 170,
                align: 'center',
                format: (value) => value.toLocaleString('en-US'),
            },
        ]);
    }, []);

    const createData = (username, email) => {
        const code = Math.floor(Math.random() * 10000);
        return { code, username, email };
    };

    const [rows, setRows] = useState([]);


    const addUserToTable = () => {
        if (formData && formData.username && formData.email) {
            const newRow = createData(formData.username, formData.email);
            setRows([...rows, newRow]);
        } else {
            console.error("formData is missing or incomplete.");
        }
    };


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <Paper sx={ { width: '100%', overflow: 'hidden' } }>
                <TableContainer sx={ { maxHeight: 440 } }>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                { columns.map((column) => (
                                    <TableCell
                                        key={ column.id }
                                        align={ column.align }
                                        style={ { minWidth: column.minWidth } }
                                    >
                                        { column.label }
                                    </TableCell>
                                )) }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={ -1 } key={ row.code }>
                                            { columns?.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell key={ column.id } align={ column.align }>
                                                        { column.format && typeof value === 'number'
                                                            ? column.format(value)
                                                            : value }
                                                    </TableCell>
                                                );
                                            }) }
                                        </TableRow>
                                    );
                                }) }
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={ [10, 25, 100] }
                    component="div"
                    count={ rows.length }
                    rowsPerPage={ rowsPerPage }
                    page={ page }
                    onPageChange={ handleChangePage }
                    onRowsPerPageChange={ handleChangeRowsPerPage }
                />
            </Paper>
            <button onClick={ addUserToTable }></button>
        </>
    );
};

export default TableLists;
