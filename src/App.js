// import "./App.css"
import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-fresh.css'

//useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
import { useState, useEffect, useMemo } from 'react'

function App() {
    //list of each individual row field value is assigned a column
    const [rowData, setRowData] = useState([
        { make: 'Ford', model: 'Focus', price: 40000 },
        { make: 'Toyota', model: 'Celica', price: 45000 },
        { make: 'BMW', model: '4 Series', price: 50000 }
    ])

    //columnDefs define the column field names in the row data
    const [columnDefs, setColumnDefs] = useState([
        { field: 'make' },
        { field: 'model' },
        { field: 'price' }
    ])

    //declare column definition properties an hook with AgGridReact
    //The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated. The useMemo Hook only runs when one of its dependencies update. This can improve performance. The useMemo and useCallback Hooks are similar.
    const defaultColDefProperties = useMemo(
        () => ({
            sortable: true,
            filter: true
        }),
        []
    )

    useEffect(() => {
        // Fetch data from server
        fetch('https://www.ag-grid.com/example-assets/row-data.json')
            .then((response) => response.json())
            .then((rowData) => setRowData(rowData))
    }, [])

    return (
        <div className='ag-theme-fresh' style={{ height: 600 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columnDefs}
                defaultColDef={defaultColDefProperties}
                rowSelection='multiple'
                animateRow={true}
            />
        </div>
    )
}

export default App
