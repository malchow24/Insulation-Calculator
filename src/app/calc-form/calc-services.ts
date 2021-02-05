import { Injectable } from "@angular/core";

@Injectable()
export class CeilingInsulation {
    ceilingInsulation = [
        {
            ceilingType: 'R15'
        },
        {
            ceilingType: 'R30'
        },
        {
            ceilingType: 'R38'
        },
        {
            ceilingType: 'R49'
        }
    ];

    getCeiling = (name: string) => {
        if(name === "R15") {
            console.log('R15');
        } else if (name === "R30") {
            console.log("R30"); 
        } else if (name === "R38") {
            console.log("R38"); 
        } else {
            console.log("R49");
            
        }
    }
}   