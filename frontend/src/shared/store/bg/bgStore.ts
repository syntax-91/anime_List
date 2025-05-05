import { makeAutoObservable } from 'mobx'


 
class BgS {
	
	current: string = './../../assets/bg_main.jpg'
	
	bgs: string[] = 
	['./../../assets/bg_main', 
		'./../../assets/bg'
	]
	

	constructor(){
		makeAutoObservable(this)
	}

	setBg(src_img: string){	
		this.current = src_img
	}

}

export const bgs  = new BgS();