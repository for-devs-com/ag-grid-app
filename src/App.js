import logo from "./logo.svg"
import "./App.css"
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/dist/styles/ag-grid.css"
import "ag-grid-community/dist/styles/ag-theme-fresh.css"

function App() {
    //list of each individual row field value is assigned a column
    const rowData = [
        { make: "Ford", model: "Focus", price: 40000 },
        { make: "Toyota", model: "Celica", price: 45000 },
        { make: "BMW", model: "4 Series", price: 50000 },
    ]

    //column definition define the fields in the row data
    const columnDefs = [
        { field: "make" },
        { field: "model" },
        { field: "price" },
    ]

    return (
        <div className="ag-theme-fresh" style={{ height: 600 }}>
            <AgGridReact rowData={rowData} columnDefs={columnDefs} />
        </div>
    )
}

export default App
