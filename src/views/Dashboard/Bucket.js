import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';

const Bucket = (({ rowHeaders, rows }) => (
  <div style={{ paddingTop: '30px' }}>
    <Table className="border-top">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
          {
            rowHeaders.map(n => (
              <TableCell key={n}>{n}</TableCell>
            ))
          }
        </TableRow>
      </TableHead>
      <TableBody>
        {
          rows.map((n, index) => (
            <TableRow className="" key={index}>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell> {n.Cust}</TableCell>
              <TableCell>{n.Amt}</TableCell>
              <TableCell>{n.Date}</TableCell>
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  </div>
));

export default Bucket;