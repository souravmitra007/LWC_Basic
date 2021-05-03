import { LightningElement,track} from 'lwc';

export default class EmployeeDetailExample extends LightningElement {

    @track empName;
    @track empAge;
    @track empSal;

    nameHandler(event){
        this.empName = event.target.value;
    }

    ageHandler(event){
        this.empAge = event.target.value;
    }

    salaryHandler(event){
        this.empSal = event.target.value;
    }

}