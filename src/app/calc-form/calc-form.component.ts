import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { tap } from 'rxjs/operators';
import { InsulationService } from '../calc-services';

@Component({
  selector: 'app-calc-form',
  templateUrl: './calc-form.component.html',
  styleUrls: ['./calc-form.component.css']
})
export class CalcFormComponent implements OnInit {
  //Variables
  ceilingInsulation: string[];
  wallInsulation: string[];
  openingTypes: string[];
  sheetrock: string[];
  length: number;
  width: number;
  height: number;
  ceilingOutput: string;
  wallOutput: string;
  firecodeOutput: string; 
  wallBatts: number;
  openings: number;


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
    height: new FormControl('')
  });

  //Openings FormGroup
  public Openings:FormGroup = new FormGroup({
    door3070: new FormControl(''),
    door3080: new FormControl(''),
    door4080: new FormControl(''),
    door6080: new FormControl(''),
    hvac2: new FormControl(''),
    hvac2Half: new FormControl(''),
    havc3: new FormControl(''),
    hvac3Half: new FormControl(''),
    hvac4: new FormControl(''),
    hvac5: new FormControl(''),
    hvac6: new FormControl(''),
    eqDoors: new FormControl('')
  });

  //Getting services
  constructor(private insulationService: InsulationService) { }

  ngOnInit(): void {
    this.ceilingInsulation = this.insulationService.ceilingInsulation;
    this.wallInsulation = this.insulationService.wallInsulation;
    this.sheetrock = this.insulationService.sheetrock;
    this.length = this.buildingDetails.controls.length.value;
    this.width = this.buildingDetails.controls.width.value;
    this.height = this.buildingDetails.controls.height.value;
    /* this.openings = 37126; */
    this.openings = 0;

    this.buildingDetails.controls.length.valueChanges.pipe(
      tap((val) => {
        this.length = val;
        return this.length;
      })
    ).subscribe();

    this.buildingDetails.controls.width.valueChanges.pipe(
      tap((val) => {
        this.width = val;
        return this.width;
      })
    ).subscribe();

    this.buildingDetails.controls.height.valueChanges.pipe(
      tap((val) => {
        this.height = val;
        return this.height;
      })
    ).subscribe();


    //Set the value of the Ceiling
    this.insulationDetails.controls.ceiling.valueChanges.pipe(
      tap((val) => {
        this.ceilingOutput = this.insulationService.setCeilingType(val, this.length, this.width); 
      })
    ).subscribe();


    //Set the value of the walls
    this.insulationDetails.controls.walls.valueChanges.pipe(
      tap((val) => {
        this.wallOutput = this.insulationService.setWallType(val, this.length, this.width, this.height, this.openings);
      })
    ).subscribe();

    //Set the value of sheetroc to y/n
    this.insulationDetails.controls.sheetrock.valueChanges.pipe(
      tap((val) => {
        this.firecodeOutput = this.insulationService.setSheetrock(val, this.length, this.width, this.height, this.openings);
      })
    ).subscribe();
  };
}
//ng build --prod -- To update site
//firebase deploy