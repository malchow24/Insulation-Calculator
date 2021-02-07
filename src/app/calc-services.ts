import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class InsulationService {
    //Variables
    ceilingInsulation = ['R15', 'R30', 'R38', 'R49'];
    sheetrock = ['Yes', 'No'];
    sheetsRequired: number;
    wallInsulation = ['R13', 'R13 + R6.5 C.I', 'R15', 'R15 + R6.5 C.I', 'R15 + R13 C.I'];
    openingTypes = ['3070 Door', '3080 Door', '4080 Door', '6080 Door', '2 Ton HVAC', '2.5 Ton HVAC', '3 Ton HVAC', '3.5 Ton HVAC', '3.5 Ton HVAC', '4 Ton HVAC', '5 Ton HVAC', '6 Ton HVAC', 'EQ Door Length'];
    length: number; 
    width: number;
    height: number;
    batts: number;
    batts2: number;
    wallbatts: number;
    wallsheets: number;
    totalOpenings: number;


    //Set Building Details
    onChange(UpdatedValue: number) {
        this.length = UpdatedValue;
    }
    onWidthChange(UpdatedValue: number) {
        this.width = UpdatedValue;
    }
    onHeightChange(UpdatedValue: number) {
        this.height = UpdatedValue;
    }

    //Ceiling Information
    setCeilingType(val: String, length: number, width: number) {
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
    };

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
    };

    //Sheetrock
    setSheetrock(val: string, length: number, width: number, height: number, openings: number) {
        if(val === 'Yes') {
            this.sheetsRequired = ((length * (height - 21) * 2 - openings) / 144 + (width * (height - 21) * 2) / 144) / 32 * 1.2;
            return `Sheets Required: ${this.sheetsRequired.toFixed(2)}`;
        } else if(val === 'No') {
            console.log('None');
        }
    };   
}   

