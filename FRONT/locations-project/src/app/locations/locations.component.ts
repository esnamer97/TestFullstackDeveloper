import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Location } from '../data/locationInterface'
import { LocationServiceService } from '../location-service.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements AfterViewInit {

  datasource = new MatTableDataSource<Location>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'area', 'parent'];
  //dataSource = new MatTableDataSource<Location>(this.ELEMENT_DATA);
  objecto: any;
  constructor(private locationService: LocationServiceService){}

  ngAfterViewInit() {
    this.datasource.paginator = this.paginator;
    this.locationService.getLocations().subscribe(
      e =>  this.datasource = new MatTableDataSource<Location>(e)
    );
  }

}
