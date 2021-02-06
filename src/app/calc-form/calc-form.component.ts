import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { CeilingInsulation, WallInsulation } from './calc-services';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  ceilingInsulation: string[];
  wallInsulation: string[];

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

  constructor(private ceilingService: CeilingInsulation, private wallService: WallInsulation) { }

  ngOnInit(): void {
    this.ceilingInsulation = this.ceilingService.ceilingInsulation;
    this.wallInsulation = this.wallService.wallInsulation;
    
    
    /* this.formControl.valueChanges.pipe(
      tap((val) => {
        console.log(val);
        
      })
    ).subscribe(); */
  }
}
//Three seperate form groups
//ng build --prod