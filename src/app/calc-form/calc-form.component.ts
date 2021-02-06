import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { InsulationService } from './calc-services';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  //Variables
  ceilingInsulation: string[];
  wallInsulation: string[];
  sheetrock: string[];

  //Insulation FormGroup
  public insulationDetails:FormGroup = new FormGroup({
    ceiling: new FormControl(''),
    walls: new FormControl(''),
    sheetrock: new FormControl(''),
    output: new FormControl('')
  });

  //Building Details FormGroup
  public buildingDetails:FormGroup = new FormGroup({
    length: new FormControl(''),
    width: new FormControl(''),
    height: new FormControl(''),
  })

  //Getting services
  constructor(private insulationService: InsulationService) { }

  ngOnInit(): void {
    this.ceilingInsulation = this.insulationService.ceilingInsulation;
    this.wallInsulation = this.insulationService.wallInsulation;
    this.sheetrock = this.insulationService.sheetrock;

    
    //Set the value of the Ceiling
    this.insulationDetails.controls.ceiling.valueChanges.pipe(
      tap((val) => {
        this.insulationService.setCeilingType(val);
      })
    ).subscribe();


    //Set the value of the walls
    this.insulationDetails.controls.walls.valueChanges.pipe(
      tap((val) => {
        this.insulationService.setWallType(val);
      })
    ).subscribe();

    //Set the value of sheetroc to y/n
    this.insulationDetails.controls.sheetrock.valueChanges.pipe(
      tap((val) => {
        this.insulationService.setSheetrock(val);
      })
    ).subscribe();
  };

  onSubmit() {
    console.log(this.insulationDetails);
    console.log(this.buildingDetails)
    
  };
}
//ng build --prod -- To update site