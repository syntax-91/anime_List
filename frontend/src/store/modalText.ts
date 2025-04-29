import { makeAutoObservable } from 'mobx'

class ModalText {
	text = 'text';
	isOpen = false;
	success = false;

	constructor(){
		makeAutoObservable(this)
	}

	run(success: boolean,text: string){
		this.isOpen = true;
		this.text = text;
		this.success = success
	}
}

export const modalText = new ModalText()