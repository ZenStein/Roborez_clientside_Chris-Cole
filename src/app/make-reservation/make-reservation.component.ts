import { Component, OnInit } from '@angular/core';
//import { DatepickerModule } from 'angular2-material-datepicker'
import {AgGridNg2} from 'ag-grid-ng2/main';
import {GridOptions} from 'ag-grid/main';

@Component({
  selector: 'app-make-reservation',
  templateUrl: './make-reservation.component.html',
  styleUrls: ['./make-reservation.component.css']
})
export class MakeReservationComponent implements OnInit {
gridOptions:GridOptions;
columnDefs
today

  constructor() {
      this.gridOptions = {
          columnDefs: [
              {headerName: 'Units', field: 'unit', width: 100, pinned: 'left'},
              {headerName: '11/1', field: 'date', width: 100},
              {headerName: '11/2', field: 'date', width: 100},
              {headerName: '11/3', field: 'date', width: 100},
              {headerName: '11/4', field: 'date', width: 100},
              {headerName: '11/5', field: 'date', width: 100},
              {headerName: '11/6', field: 'date', width: 100},
              {headerName: '11/7', field: 'date', width: 100},
              {headerName: '11/8', field: 'date', width: 100},
              {headerName: '11/9', field: 'date', width: 100},
              {headerName: '11/10', field: 'date', width: 100},
              {headerName: '11/11', field: 'date', width: 100}
          ],
          rowData: [
              {unit: '#1', role: 'Developer'},
              {unit: '#2', role: 'Manager'},
              {unit: '#3', role: 'Musician'},
              {unit: '#4', role: 'Musician'},
              {unit: '#5', role: 'Musician'},
              {unit: '#6', role: 'Musician'},
              {unit: '#7', role: 'Musician'},
              {unit: '#8', role: 'Musician'},
              {unit: '#9', role: 'Manager'}
          ],
          rowHeight: 48
      };
  }
    
  ngOnInit() {

  }

}
