import { Component, OnInit } from '@angular/core';
import { DataService } from './Data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Profile } from './Models/Profile';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // Properties
  private dateReg = '(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))';
  public profileForm: FormGroup;
  public formErrors = [];

  // Default Constructor
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.setForm();
  }

  private setForm() {
    this.profileForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.email]),
      phone: new FormControl(''),
      date: new FormControl('', [Validators.required, Validators.pattern(this.dateReg)])
    });
  }
  public submitForm() {
    var profile = new Profile(this.profileForm.get('title').value, this.profileForm.get('firstName').value, this.profileForm.get('lastName').value, this.profileForm.get('email').value, this.profileForm.get('phone').value, this.profileForm.get('date').value.toString())
    this.dataService.createProfile(profile).subscribe(response => {
      console.log(response);
    })
  }
}
