import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
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
}   