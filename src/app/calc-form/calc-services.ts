import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class CeilingInsulation {
    ceilingInsulation = ['R15', 'R30', 'R38', 'R49'];

}   

@Injectable({
    providedIn: 'root',
})
export class WallInsulation {
    wallInsulation = ['R13', 'R13 + R6.5 C.I', 'R15', 'R15 + R6.5 C.I', 'R15 + R13 C.I'];
}