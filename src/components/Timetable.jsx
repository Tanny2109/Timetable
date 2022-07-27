import { borderRight } from '@mui/system';
import React from 'react';
//import { } from 'react-dom';
// import MUIDataTable from 'mui-datatables';
import { Table, Column, HeaderCell, Cell } from 'rsuite-table';
import 'rsuite-table/dist/css/rsuite-table.css';

const data = [
    {
        time: '09:00-10:00',
        mon: '645: IPR and Ethics [5206]',
        tue: '645: IPR and Ethics [5206]',
        wed: '645: IPR and Ethics [5206]',
        thurs: '-',
        fri: '-',
        rowspan: 1
    },
    {
        time: '10:00-11:00',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs: '-',
        fri: '-',
        rowspan: 1
    },
    {
        time: '11:00-12:00',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs: '-',
        fri: 'CS590: Deep Learning [L1]',
        rowspan: 1
    },
    {
        time: '12:00-01:00',
        mon: 'CS590: Deep Learning [L1]',
        tue: 'CS590: Deep Learning [L1]',
        wed: 'HS236: Sociology [1G2]',
        thurs: 'HS236: Sociology [1G2]',
        fri: 'HS236: Sociology [1G2]'
    },
    {
        time: '01:00-02:00',
        mon: '',
        tue: '',
        wed: 'LUNCH',
        thurs: '',
        fri: ''
    },
    {
        time: '02:00-03:00',
        mon: '-',
        tue: '-',
        wed: '623: Research Methodology [5206]',
        thurs: '623: Research Methodology [5206]',
        fri: '623: Research Methodology [5206]',
        rowspan: 1
    },
    {
        time: '03:00-04:00',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs: '-',
        fri: '-',
        rowspan: 1
    },
    {
        time: '04:00-05:00',
        mon: '-',
        tue: '-',
        wed: '-',
        thurs: '-',
        fri: '-',
        rowspan: 1
    },
    {
        time: '05:00-06:00',
        mon: '637: Genome Editing [4006]',
        tue: '637: Genome Editing [4006]',
        wed: '-',
        thurs: '-',
        fri: '-',
        rowspan: 1
    }
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
        width={1782 / 6}
        align='center'
    >
    <HeaderCell>Time</HeaderCell>
    <Cell dataKey="time" style={{border: '1px solid black'}} />
    </Column>
          
    <Column
    width={1782 / 6}
    align='center'
    rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Monday</HeaderCell>
    <Cell dataKey="mon" style={{border: '1px solid black'}}/>
    </Column>
          
    <Column
    width={1782 / 6}
    align='center'
    rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Tuesday</HeaderCell>
    <Cell dataKey="tue" style={{border: '1px solid black'}}/>
    </Column>

    <Column
        width={1782 / 6}
        align='center'
        rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Wednesday</HeaderCell>
    <Cell dataKey="wed" style={{border: '1px solid black'}}/>
    </Column>

    <Column
        width={1782 / 6}
        align='center'
        rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Thursday</HeaderCell>
    <Cell dataKey="thurs" style={{border: '1px solid black'}}/>
    </Column>

    <Column
        width={1782 / 6}
        align='center'
        rowSpan={rowData => {
        return rowData.rowspan;
    }}
    >
    <HeaderCell>Friday</HeaderCell>
    <Cell dataKey="fri" style={{border: '1px solid black'}}/>
    </Column>
    </Table>
  );
};


export default Timetable;