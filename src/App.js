import logo from "./logo.svg"
import "./App.css"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-fresh.css"

//useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value.
import { useState } from "react"

function App() {
    //list of each individual row field value is assigned a column
    const [rowData, setRowData] = useState([
        { make: "Ford", model: "Focus", price: 40000 },
        { make: "Toyota", model: "Celica", price: 45000 },
        { make: "BMW", model: "4 Series", price: 50000 },
    ])

    //columnDefs define the column field names in the row data
    const [columnDefs, setColumnDefs] = useState([
        { field: "make" },
        { field: "model" },
        { field: "price" },
    ])

    return (
        <div className="ag-theme-fresh" style={{ height: 600 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    )
}

export default App
