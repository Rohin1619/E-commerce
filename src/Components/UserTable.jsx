import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

import { nanoid } from 'nanoid';

const UserTable = ({ users }) => {
    const columns = [
        { id: 'id', label: 'ID', minWidth: 100 },
        { id: 'username', label: 'Username', minWidth: 170 },
        { id: 'email', label: 'Email', minWidth: 170 },
        { id: 'password', label: 'Password', minWidth: 170 },
    ];

    const [rows, setRows] = useState(users);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  

    useEffect(() => {
        const usersWithIds = users.map((user) => ({
            id: nanoid(10), 
            ...user,
        }));
        setRows(usersWithIds)
    }, [users])

    return (
        <Paper sx={ { width: '100%', overflow: 'hidden' } }>
            <TableContainer sx={ { maxHeight: 440 } }>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            { columns.map((column) => (
                                <TableCell
                                    key={ column.id }
                                    align="center"
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
                            .map((row, index) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={ -1 } key={ index }>
                                        { columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={ column.id } align="center">
                                                    { value }
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
    );
};

export default UserTable;
