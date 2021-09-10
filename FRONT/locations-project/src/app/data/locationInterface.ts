import { TOUCH_BUFFER_MS } from "@angular/cdk/a11y/input-modality/input-modality-detector";

export class Location {
    id: number;
    name: String;
    area: number;
    parent: number;

    constructor(id: number, name: String, area:number, parent:number){
        this.id = id;
        this.name = name;
        this.area = area;
        this.parent = parent;
    }
}