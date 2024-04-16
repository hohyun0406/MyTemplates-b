import { Link, Typography } from '@mui/material'
import {GridRowId, GridColDef} from '@mui/x-data-grid'
import {UserColumn} from '../model/user-column'
import { PG } from '../../common/enums/PG'
import { CustomTypography } from '../../common/style/cell'

interface CellType{
    row : UserColumn
}

export default function UserColumns() : GridColDef[]{

    return [
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'id',
            headerName : 'No.',
            renderCell: ({row} : CellType) => CustomTypography(row.id, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'username',
            headerName : 'ID',
            renderCell: ({row} : CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}><Link href={`${PG.USER}/detail/${row.id}`}> {row.username}</Link></Typography>
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'password',
            headerName : '비밀번호',
            renderCell: ({row} : CellType) => CustomTypography(row.password, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'name',
            headerName : '이름',
            renderCell: ({row} : CellType) => CustomTypography(row.name, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'phone',
            headerName : '번호',
            renderCell: ({row} : CellType) => CustomTypography(row.phone, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'address',
            headerName : '주소',
            renderCell: ({row} : CellType) => CustomTypography(row.address, "1.2rem")
        },
        {
            flex: 0.04,
            minWidth : 30,
            sortable : false,
            field: 'job',
            headerName : '직업',
            renderCell: ({row} : CellType) => CustomTypography(row.job, "1.2rem")
        },

    ]
}