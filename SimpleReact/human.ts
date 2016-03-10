class Human {
	name: string;
	
	constructor (yourHumanName:string ){
		this.name = yourHumanName;
	}
	
	callHuman = function(){
		console.log('Hello ' + this.name);
	}
}