import { Component } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-button-renderer',
  standalone: true,
  imports: [],
  template: `
    <button type="button" class="btn btn-sm btn-danger" (click)="onClick($event)">
        {{label}}
    </button>
    `
  
})
export class ButtonRendererComponent implements ICellRendererAngularComp {
  
  params: any;
  label: string = "";

  //Karşı taraftan yakalayıp set etmek için
  agInit(params: any): void {
    this.params = params;
    this.label = this.params.label || null;
  }
  
  refresh(params: ICellRendererParams<any, any, any>): boolean {
    this.params = params;
    this.label = this.params.label || null;
    return true;
  }
  
  onClick(event: any){
    if(this.params.onClick instanceof Function){
        const params = {
            event: event,
            rowData: this.params.node.data
        }
        this.params.onClick(params);
    }
}
}
