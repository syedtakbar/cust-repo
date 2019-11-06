import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>{{name}}</h1>
  <p><i>{{name}} is in {{region}} region </i></p>
  <button (click)=addressClick()>Show/Hide Address</button>
  <br/>
  <div [hidden]="hideAddress">
  <fieldset>
  <label>Street:</label> {{street}}
  </fieldset>
  <fieldset>
  <label>City:</label> {{city}} 
  </fieldset>
  <fieldset>
  <label>Region:</label> 
  <select (change)=regionChange($event.target.value)>
  <option>East</option>
  <option>North</option>
  <option>South</option>
  <option>West</option>
  </select>
  </fieldset>
 </div>



 
  `,
})
export class AppComponent  { 
  name = 'Syed Akbar'; 
  street = "8891 Pine Bluff Court";
  city = "Eden Prairie";
  region = "East";

  hideAddress = false;

  addressClick() {
    this.hideAddress =  !this.hideAddress;
  }

  regionChange(region: string) {
     this.region =region;
  }
}
