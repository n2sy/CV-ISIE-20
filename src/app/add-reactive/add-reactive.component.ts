import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-reactive',
  templateUrl: './add-reactive.component.html',
  styleUrls: ['./add-reactive.component.css']
})
export class AddReactiveComponent implements OnInit {
  addForm : FormGroup;
  listGenders = ['male', 'female'];
  forbiddenJobs = ['teacher', 'player'];
  constructor() { }

  ngOnInit(): void {
    this.addForm = new FormGroup({
      'infos' : new FormGroup({
        'name' : new FormControl(null, Validators.required),
        'pseudo' : new FormControl(null)
      }),
      'e-address' : new FormControl(null, [Validators.required, Validators.email]),
      'job' : new FormControl(null, this.forbiddenJobsUses.bind(this)),
      'gender' : new FormControl('male'),
      'skills' : new FormArray([])
    })
  }

  showForm() {
    console.log(this.addForm);  
  }

  get FormSkills() {
    return <FormArray>this.addForm.get('skills');
  }

  addSkill() {
    const ctrl = new FormControl(null, Validators.required);
    this.FormSkills.push(ctrl);
  }

  forbiddenJobsUses(ctrl : FormControl) {
    if(this.forbiddenJobs.indexOf(ctrl.value) != -1) {
      return {'jobIsForbidden' : true}
    }
    return null;
  }
}
