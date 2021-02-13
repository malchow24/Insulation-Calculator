import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InsulationService, OpeningType } from '../calc-services';
import { map, tap } from 'rxjs/operators'

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
  length: number;
  width: number;
  height: number;
  ceilingOutput: string;
  wallOutput: string;
  firecodeOutput: string; 
  wallBatts: number;
  openings: number;
  keys: object;
  totalOpenings: object;
  insulationKeys: object;
  ceilingKeys: any;
  buidlingDetailsKeys: string[];



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
  constructor(private insulationService: InsulationService) {
    
  }

  ngOnInit(): void {    
    this.ceilingInsulation = this.insulationService.ceilingInsulation;
    this.wallInsulation = this.insulationService.wallInsulation;
    this.sheetrock = this.insulationService.sheetrock;
    this.openings = 0;
    
    this.keys = Object.keys(this.buildingDetails.controls);
    this.totalOpenings = Object.keys(this.Openings.controls);
    this.insulationKeys = Object.keys(this.insulationDetails.controls)

    //Set building details
    this.buildingDetails.valueChanges.subscribe(val => {
      this.length = val.length
      this.width = val.width;
      this.height = val.height; 
      
    });

    this.Openings.valueChanges.pipe(
      tap((newOpenings) => {
        let sum = 0;
        Object.entries(newOpenings).map(([name, count]: [string,OpeningType]) => {
          sum += newOpenings[name] * this.insulationService.openingTypes[name].multiplier 
        })
        this.openings = sum;
        return this.openings;

      })
    ).subscribe();

    //set insulation details
    this.insulationDetails.valueChanges.subscribe(val => {
      this.ceilingOutput = this.insulationService.setCeilingType(this.insulationDetails.controls.ceiling.value, this.length, this.width);
      this.wallOutput = this.insulationService.setWallType(this.insulationDetails.controls.walls.value, this.length, this.width, this.height, this.openings);
      this.firecodeOutput = this.insulationService.setSheetrock(this.insulationDetails.controls.sheetrock.value, this.length, this.width, this.height, this.openings);
    });
  }
}
//ng build --prod -- To update site
//firebase deploy