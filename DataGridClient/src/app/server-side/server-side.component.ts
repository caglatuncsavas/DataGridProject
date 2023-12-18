import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { ColDef, GridOptions, IDatasource, IGetRowsParams, IServerSideDatasource, IServerSideGetRowsRequest, RowModelType } from 'ag-grid-enterprise';
import { GridReadyEvent } from 'ag-grid-community';

@Component({
  selector: 'app-server-side',
  standalone: true,
  imports: [AgGridModule],
  template: `
  <ag-grid-angular
  style="width: 100%; height: 500px"
  [columnDefs]="columnDefs"
  [defaultColDef]="defaultColDef"
  [rowModelType]="rowModelType"
  [gridOptions]="gridOptions"
  [rowData]="rowData"
  [class]="themeClass"
  [pagination]="true"
  (gridReady)="onGridReady($event)"
></ag-grid-angular>`
})
export class ServerSideComponent {
  gridApi: any; 
  public columnDefs: ColDef[] = [
    {
      headerName: "#",
      valueGetter: (params: any) => params.node.rowIndex + 1,
      width: 30     
    },
    { field: "name", filter: true },
    { field: "author" },
    {
      field: "publishDate",
      valueFormatter: (params: any) => {
        return new Date(params.value).toLocaleDateString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric' });
      },
    }    
  ];

  constructor(private http: HttpClient) {}

  gridOptions: GridOptions = {
    pagination: true,
    rowModelType: 'infinite',
    cacheBlockSize: 20, // you can have your custom page size
    paginationPageSize: 20 //pagesize
  };
  

  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 100,
    sortable: true,
  };
  public rowModelType: RowModelType = 'infinite';
  public rowData!: any[];
  public themeClass: string =
    "ag-theme-quartz";

  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;
    this.gridApi.setDatasource(this.dataSource);
  }

    dataSource: IDatasource = {
      getRows: (params: IGetRowsParams) => {


console.log(params.startRow, params.endRow);

        this.apiService(params).subscribe((response:any) => {
  
          params.successCallback(
            response.data, response.totalCount
          );
  
        });
      }
    }

    apiService(params:any) {
      let query =(`https://localhost:7126/api/Values/GetAll?skip=${params.startRow}&top=${params.endRow- params.startRow}`)
      return this.http.get(query);
    }
}
  




