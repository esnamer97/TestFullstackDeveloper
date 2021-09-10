import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '../../data/locationInterface';
import { LocationServiceService } from '../../location-service.service';
import { SharedService } from '../../shared-service.service';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  constructor(private fb: FormBuilder, private locationService: LocationServiceService, private router: Router,
    public sharedService: SharedService) { }

  locations!: Location[];

  locationForm = this.fb.group({
    name:['', Validators.required],
    area: ['', Validators.required],
    parent: new FormControl(0)
  });

  ngOnInit(): void {
    this.locationService.getLocations().subscribe(
      e =>  this.locations = e
    );
  }

  location: Location = new Location(0,'',0,0);

  onSubmit() {
    
    this.location = new Location(0,this.locationForm.value.name,this.locationForm.value.area,this.locationForm.value.parent.id);
    
    if(this.verifyParent(this.location, this.locationForm.value.parent.name)){
      console.log('form data is ', this.locationForm.value);
      console.log('form data is ', this.locationForm.value.name);
      this.locationService.saveLocation(this.location).subscribe(
        res => { 
          this.router.navigate(['/dashboard']);
          this.sharedService.globalVar = 0;
        }
      );
    }
  }

  verifyParent(loc: Location, name: String): Boolean{
    if(loc.name == name){ 
      return false;
    }else{
      return true;
    }
  }

}
