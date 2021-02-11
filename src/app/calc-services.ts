import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class InsulationService {
    //Variables
    ceilingInsulation = ['R15', 'R30', 'R38', 'R49'];
    sheetrock = ['Yes', 'No'];
    buildingDetailLabels = ['Length (In.)', 'Width (In.)', 'Height (In.)']
    sheetsRequired: number;
    wallInsulation = ['R13', 'R13 + R6.5 C.I', 'R15', 'R15 + R6.5 C.I', 'R15 + R13 C.I'];
    openingTypes = [
        {
            name: '3070 Door',
            multiplier: 3520
        },
        {  name: '3080 Door',
            multiplier: 3600
        },
        {  name: '4080 Door',
            multiplier: 5252
        },
        {  name: '6080 Door',
            multiplier: 7676
        },
        {  name: '2 Ton HVAC',
            multiplier: 682
        },
        {  name: '2.5 Ton HVAC',
            multiplier: 744
        },
        {   name: '3 Ton HVAC',
            multiplier: 868
        },
        {   name: '3.5 Ton HVAC',
            multiplier: 868
        },
        {   name: '3.5 Ton HVAC',
            multiplier: 868
        },
        {   name: '4 Ton HVAC',
            multiplier: 868
        },
        {   name: '5 Ton HVAC',
            multiplier: 868
        },
        {   name: '6 Ton HVAC',
            multiplier: 868
        },
        {   name: 'EQ Door Length',
            multiplier: 110
        }
    ];
    length: number; 
    width: number;
    height: number;
    batts: number;
    batts2: number;
    wallbatts: number;
    wallsheets: number;
    totalOpenings: number;

    setOpenings(val:string, opening: number) {
        if(val === "3070 Door") {
            this.totalOpenings = this.totalOpenings + (opening * 3520);
        } else if(val === "3080 Door") {
            this.totalOpenings = this.totalOpenings + (opening * 3600);
        } else if(val === "4080 Door") {
            this.totalOpenings = this.totalOpenings + (opening * 5252);
        } else if(val === "6080 Door") {
            this.totalOpenings = this.totalOpenings + (opening * 7676);
        } else if(val === "2 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 682);
        } else if(val === "2.5 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 744);
        } else if(val === "3 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 744);
        } else if(val === "3.5 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 868);
        } else if(val === "4 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 868);
        } else if(val === "5 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 868);
        } else if(val === "6 Ton HVAC") {
            this.totalOpenings = this.totalOpenings + (opening * 868);
        } else if(val === "EQ Door Length") {
            this.totalOpenings = this.totalOpenings + (opening * 110);
        }
        return this.totalOpenings;
    }

    

    //Ceiling Information
    setCeilingType(val: string, length: number, width: number) {
        if(val === 'R15') {
            this.batts = (length * width / 144 / 77.5 * 0.9375);
            return `Ceiling -  R15 Batts: ${this.batts.toFixed(2)}`;
        } else if(val === 'R30') {
            this.batts = (length * width * 1.5 / 144 / 77.5 * 0.9375);
            return `Ceiling - R15 Batts: ${this.batts.toFixed(2)}`;
        } else if (val === 'R38') {
            this.batts = (length * width / 144 / 67.81 * 0.9375 * 1.5);
            return `Ceiling - R21 Batts: ${this.batts.toFixed(2)}`;
        } else if (val === 'R49') {
            this.batts = (length * width * 1.5 / 144 / 77.5 * 0.9375);
            this.batts2 = (length * width / 144 / 67.81 * 0.9375 * 0.5);
            return `Ceiling - R21 Batts: ${this.batts2.toFixed(2)} | R15 Batts: ${this.batts.toFixed(2)}`;
        }
    }

    //Wall information 
    setWallType(val: string, length: number, width: number, height: number, openings: number) {
        if(val === 'R13') {
            this.wallbatts = ((length * (height - 21) * 2 - openings)/144 + (width * (height - 21) * 2)/144) / 116.3 * 0.9375;
            return `Wall - R13 Batts: ${this.wallbatts.toFixed(2)}`;
        } else if(val === 'R13 + R6.5 C.I') {
            this.wallbatts = ((length * (height - 21) * 2 - openings)/144 + (width * (height - 21) * 2)/144) / 116.3 * 0.9375;
            this.wallsheets = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 32 * 1.2;
            return `Wall - R13 Batts: ${this.wallbatts.toFixed(2)} | 1" Thermax Sheets: ${this.wallsheets.toFixed(2)}`;
        } else if (val === 'R15') {
            this.wallbatts = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 77.5 * 0.9375;
            return `Wall - R15 Batts: ${this.wallbatts.toFixed(2)}`;
        } else if (val === 'R15 + R6.5 C.I') {
            this.wallbatts = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 77.5 * 0.9375;
            this.wallsheets = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 32 * 1.2;
            return `Wall - R15 Batts: ${this.wallbatts.toFixed(2)} | 1" Thermax Sheets: ${this.wallsheets.toFixed(2)}`;
        } else if (val === 'R15 + R13 C.I') {
            this.wallbatts = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 77.5 * 0.9375;
            this.wallsheets = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 32 * 1.2 * 2;
            return `Wall - R15 Batts: ${this.wallbatts.toFixed(2)} | 1" Thermax Sheets: ${this.wallsheets.toFixed(2)}`;
        } 
    }

    //Sheetrock
    setSheetrock(val: string, length: number, width: number, height: number, openings: number) {
        if(val === 'Yes') {
            this.sheetsRequired = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 32 * 1.2;
            return `Sheets Required: ${this.sheetsRequired.toFixed(2)}`;
        } else if(val === 'No') {
            console.log('None');
        }
    }   
}   

