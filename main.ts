/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */
enum timerunning{
    //% block="30 minutes"
    thirtyminutes,
    //% block="35 minutes"
    thirtyfiveminutes,
    //% block="40 minutes"
    fortyminutes,
    //% block="45 minutes"
    fortyfiveminutes,
    //% block="50 minutes"
    fiftyminutes,
    //% block="55 minutes"
    fiftyfiveminutes,
    //% block="60 minutes"
    sixtyminutes, 
}
//% color="#fec636" weight=100 icon="\uf0e7"
namespace electrophoresis {

	* @param time, electrophoresis time eg: timerunning.thirtyminutes
	*/
	//% block="Run the centrifugue during %time" blockGap=8
    
    export function time_electrophoresis(time: timerunning) {void{
     switch (time){
        case timerunning.thirtyminutes:
        pins.D10.digitalWrite(false)
        pause(30*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.thirtyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(35*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.fortyminutes:
        pins.D10.digitalWrite(false)
        pause(40*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.fortyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(45*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.fiftyminutes:
        pins.D10.digitalWrite(false)
        pause(50*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.fiftyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(55*60*1000)
        pins.D10.digitalWrite(true)
		;
        case timerunning.sixtyminutes:
        pins.D10.digitalWrite(false)
        pause(60*60*1000)
        pins.D10.digitalWrite(true)
		;
     }   
    }

    }

    // note that Caml casing yields lower case
    // block text with spaces

}
