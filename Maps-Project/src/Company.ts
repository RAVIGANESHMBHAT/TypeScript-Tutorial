import { Mappable } from "./CustomMap";
import faker from "faker";

export class Company implements Mappable{
  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  color: string = 'red';

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return `<div>
    <h3>Company name = ${this.companyName}</h3>
    <h5>Catch phrase = ${this.catchPhrase}</h5>
    </div>`;
  }
}
