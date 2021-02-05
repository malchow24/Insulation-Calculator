import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { CeilingInsulation } from './calc-services';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  ceilingInsulation: {ceilingType: string}[] = [];

  public formGroup:FormGroup = new FormGroup({
    ceiling: new FormControl(''),
    walls: new FormControl(''),
    sheetrock: new FormControl('')
  });

  public formGroup2:FormGroup = new FormGroup({
    length: new FormControl(''),
    width: new FormControl(''),
    height: new FormControl(''),
  })


  wallInsulation = ['R13', 'R13 + R6.5 C.I.', 'R15', 'R15 + R6.5 C.I.', 'R15 + R13 C.I.'];


  constructor(private ceilingService: CeilingInsulation) { }

  ngOnInit(): void {
    this.ceilingInsulation = this.ceilingService.ceilingInsulation;
    console.log(this.ceilingInsulation)
    
    /* this.formControl.valueChanges.pipe(
      tap((val) => {
        console.log(val);
        
      })
    ).subscribe(); */
  }
}
//Three seperate form groups
//ng build --prod