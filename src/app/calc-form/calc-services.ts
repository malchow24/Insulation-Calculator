import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class InsulationService {
    ceilingInsulation = ['R15', 'R30', 'R38', 'R49'];
    sheetrock = ['Yes', 'No'];
    wallInsulation = ['R13', 'R13 + R6.5 C.I', 'R15', 'R15 + R6.5 C.I', 'R15 + R13 C.I'];

    setCeilingType(val: String) {
        if(val === 'R15') {
            console.log('R15 Batts: ');
        } else if(val === 'R30') {
            console.log('R15 Batts: ');
        } else if (val === 'R38') {
            console.log('R21 Batts: ');
        } else if (val === 'R49') {
            console.log('R15 Batts: ');
            console.log('R21 Batts: ');
            
        } else {
            console.log('no value selected');
            
        };
    }

    setWallType(val: string) {
        if(val === 'R13') {
            console.log('R13 Batts: ');
        } else if(val === 'R13 + R6.5 C.I') {
            console.log('R13 Batts: ');
            console.log('1" Thermax Sheets: ');
        } else if (val === 'R15') {
            console.log('R15 Batts: ');
        } else if (val === 'R15 + R6.5 C.I') {
            console.log('R15 Batts: ');
            console.log('1" Thermax Sheets: ')
        } else {
            console.log('no value selected');
            
        }
    }

    setSheetrock(val: string) {
        if(val === 'Yes') {
            console.log('Sheets: ');
        } else if(val === 'No') {
            console.log('None');
        } else {
            console.log('no value selected');
        }
    }
    
}   

