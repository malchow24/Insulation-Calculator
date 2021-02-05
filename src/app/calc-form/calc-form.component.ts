import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { CeilingInsulation } from './calc-services';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  formControl = new FormControl()
  wallInsulation = ['R13', 'R13 + R6.5 C.I.', 'R15', 'R15 + R6.5 C.I.', 'R15 + R13 C.I.'];
  buildingDetails = ['Length (In.)', 'Width (In.)', 'Height (In.)'];
  openings = ['3070 Door', '3080 Door', '4080 Door', '6080 Door', '2 Ton HVAC', '2.5 Ton HVAC', '3 Ton HVAC', '3.5 Ton HVAC', '4 Ton HVAC', '5 Ton HVAC', '6 Ton HVAC', 'EQ Door Length']

  constructor(private ceilingInsulation: CeilingInsulation) { }

  ngOnInit(): void {
    this.formControl.valueChanges.pipe(
      tap((val) => {
        console.log(val);
        
      })
    ).subscribe();
  }

  

}
//Three seperate form groups
//ng build --prod