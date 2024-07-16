import {Component} from "@angular/core";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";

@Component({
	selector: 'add-update-form',
	standalone: true,
	imports: [ReactiveFormsModule],
	templateUrl: './add-update-form.component.html',
	styleUrl: './add-update-form.component.css'
})
export class AddUpdateFormComponent {
	coffeeForm = new FormGroup({
		roasterControl: new FormControl('', Validators.required),
		varietyControl: new FormControl(null),
		sizeControl: new FormControl(null, Validators.required),
		roastControl: new FormControl(null, Validators.required),
		formatControl: new FormControl(null, Validators.required),
		grindControl: new FormControl(null),
		originControl: new FormControl(null),
		singleOriginControl: new FormControl(false),
		tastingNotesControl: new FormControl('')
	})

	submitForm() {
		let result = this.coffeeForm.getRawValue().roasterControl;
		alert(result);
	}
}
