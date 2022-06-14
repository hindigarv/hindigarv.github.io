import { DataGrid } from '@mui/x-data-grid';

function Result(props) {

  const columns = [
    { field: 'count', headerName: 'Count' },
    { field: 'word', headerName: 'शब्द' },
    { field: 'mool', headerName: 'मूल' },
    { field: 'paryay', headerName: 'पर्याय', width: '100%' },
  ];

  let rows = props.words.map(it => ({...it, id:it.word}) )

  return (
      <div style={{ display: 'flex', height: '100%' }}>
        <div style={{ flexGrow: 1 }}>
          <DataGrid
            rows={rows}
            columns={columns}
            autoHeight
          />
        </div>
      </div>
  );
}

export default Result;
