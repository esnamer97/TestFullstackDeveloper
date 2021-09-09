import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '../../data/locationInterface';

@Component({
  selector: 'app-create-location',
  templateUrl: './create-location.component.html',
  styleUrls: ['./create-location.component.css']
})
export class CreateLocationComponent implements OnInit {
  constructor(private fb: FormBuilder) { }


  locationForm = this.fb.group({
    name:['', Validators.required],
    area: ['', Validators.required],
    parent: new FormControl('')
  });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('form data is ', this.locationForm.value);
  }

}
