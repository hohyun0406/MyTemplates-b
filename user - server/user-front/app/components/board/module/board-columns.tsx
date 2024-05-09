import { Link, Typography } from "@mui/material";
import { GridColDef } from "@mui/x-data-grid";
import { BoardColumn } from "../model/board-column";
import { PG } from "../../common/enums/PG";


interface CellType{
  row : BoardColumn
}

export default function BoardColumns() : GridColDef[] {
    return [
      {
        flex: 0.04,
        minWidth : 30,
        sortable : false,
        field: 'id',
        headerName : 'No.',
        renderCell: ({row} : CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}><Link href={`${PG.BOARD}/detail/${row.id}`}>{row.id}</Link></Typography>
    },
    {
        flex: 0.04,
        minWidth : 30,
        sortable : false,
        field: 'boardName',
        headerName : '보드이름',
        renderCell: ({row} : CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.boardName}</Typography>
    },
    {
        flex: 0.04,
        minWidth : 30,
        sortable : false,
        field: 'boardType',
        headerName : '보드의 타입',
        renderCell: ({row} : CellType) => <Typography textAlign="center" sx={{fontSize:"1.5rem"}}>{row.boardType}</Typography>
    },
      ];
}