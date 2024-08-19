import { borderRight } from '@mui/system';
import React from 'react';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';
import './TT.css'; // Create and import a CSS file

const data = [
    {
        time: '9:30-10:45',
        mon: '-',
        tue: 'CS 6250: Computer Networks\n[Scheller College of Business 300]',
        wed: '-',
        thurs: 'CS 6250: Computer Networks\n[Scheller College of Business 300]',
        rowspan: 1
    },
    {
        time: '11:00-12:15',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs:  '-',
        rowspan: 1
    },
    {
        time: '02:00-03:15',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs: '-',
        rowspan: 1
    },
    {
        time: '05:00-06:15',
        mon: 'CS 6400A: DB Concepts & Design\n[Instructional Center 211]',
        tue: 'CSE8803: ML for neural data\n[Mason 3133]',
        wed: 'CS 6400A: DB Concepts & Design\n[Instructional Center 211]',
        thurs: 'CSE8803: ML for neural data\n[Mason 3133]',
        rowspan: 1
    },
];

const TT = () => {
  return (
    <div className="responsive-table-container">
      <Table
          autoHeight
          data={data}
          style={{border: '1px solid black'}}
      >
        <Column align="center" flexGrow={1}>
          <HeaderCell>Time</HeaderCell>
          <Cell dataKey="time" style={{border: '1px solid black', whiteSpace: 'pre-line'}} />
        </Column>
            
        <Column align="center" flexGrow={1}>
          <HeaderCell>Monday</HeaderCell>
          <Cell dataKey="mon" style={{border: '1px solid black', whiteSpace: 'pre-line'}}/>
        </Column>
            
        <Column align="center" flexGrow={1}>
          <HeaderCell>Tuesday</HeaderCell>
          <Cell dataKey="tue" style={{border: '1px solid black', whiteSpace: 'pre-line'}}/>
        </Column>

        <Column align="center" flexGrow={1}>
          <HeaderCell>Wednesday</HeaderCell>
          <Cell dataKey="wed" style={{border: '1px solid black', whiteSpace: 'pre-line'}}/>
        </Column>

        <Column align="center" flexGrow={1}>
          <HeaderCell>Thursday</HeaderCell>
          <Cell dataKey="thurs" style={{border: '1px solid black', whiteSpace: 'pre-line'}}/>
        </Column>
      </Table>
    </div>
  );
};

export default TT;