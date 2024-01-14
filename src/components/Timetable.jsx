import { borderRight } from '@mui/system';
import React from 'react';
//import { } from 'react-dom';
// import MUIDataTable from 'mui-datatables';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const data = [
    {
        time: '9:30-10:45',
        mon: '-',
        tue: 'CS 8813: Intro to Res [Lab]',
        wed: 'CS 8813: Intro to Res [Lab]',
        thurs: '-',
        rowspan: 1
    },
    {
        time: '11:00-12:15',
        mon: '-',
        tue: '-',
        wed: 'CS 8813: Intro to Res [Lab]',
        thurs:  '-',
        rowspan: 1
    },
    {
        time: '02:00-03:15',
        mon: 'CS 8803: Global Entrepreneursip [Online]',
        tue: 'Graduate Seminar',
        wed: 'CS 8803: Global Entrepreneursip [Online]',
        thurs: 'CS 8813: Intro to Res',
        rowspan: 1
    },
    {
        time: '03:30-04:45',
        mon: 'CS 8813: Intro to Res [Lab]',
        tue: 'CS 8813: Intro to Res [Pink]',
        wed: '-',
        thurs: 'CS 8813: Intro to Res [Lab Lecture]',
        rowspan: 1
    },
]

const Timetable = () => {
  return (
    <Table
        height={400}
        width={1782}
        autoHeight
        data={data}
        style={{borderBottom: '1px solid black', borderTop: '1px solid black'}}
    >
    <Column
        width={1782 / 5}
        align='center'
    >
    <HeaderCell>Time</HeaderCell>
    <Cell dataKey="time" style={{border: '1px solid black'}} />
    </Column>
          
    <Column
    width={1782 / 5}
    align='center'
    rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Monday</HeaderCell>
    <Cell dataKey="mon" style={{border: '1px solid black'}}/>
    </Column>
          
    <Column
    width={1782 / 5}
    align='center'
    rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Tuesday</HeaderCell>
    <Cell dataKey="tue" style={{border: '1px solid black'}}/>
    </Column>

    <Column
        width={1782 / 5}
        align='center'
        rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Wednesday</HeaderCell>
    <Cell dataKey="wed" style={{border: '1px solid black'}}/>
    </Column>

    <Column
        width={1782 / 5}
        align='center'
        rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Thursday</HeaderCell>
    <Cell dataKey="thurs" style={{border: '1px solid black'}}/>
    </Column>
    </Table>
  );
};


export default Timetable;