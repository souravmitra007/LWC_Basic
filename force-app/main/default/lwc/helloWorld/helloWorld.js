import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {
   
    @track greeting = 'World';
    @track temp;
    
    changeHandler(event){
        this.greeting = event.target.value;
    }

    changeEvent(event){
        var inputCmp = this.template.querySelector(".inputCmp");
        var val ='Hello' + ' ' + inputCmp.value;
      this.temp = val;
    }



}