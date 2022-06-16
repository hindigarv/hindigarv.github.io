import { DataGrid } from '@mui/x-data-grid';

function Result(props) {

  const columns = [
    { 
      field: 'word', headerName: 'शब्द', flex: 1,
      valueGetter: (params) => {
        let count = params.row.count > 1 ? ` (${params.row.count})` : ""
        return `${params.row.word}${count}`
      }
    },
    { field: 'mool', headerName: 'मूल', flex: 1 },
    { field: 'paryay', headerName: 'पर्याय', flex: 3 },
  ];

  let rows = props.words.map(it => ({...it, id:it.word}) )

  return (
      <div style={{  width: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
            disableSelectionOnClick
          />
        </div>
      </div>
  );
}

export default Result;
