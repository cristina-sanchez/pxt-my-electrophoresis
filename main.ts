/**
 * Functions are mapped to blocks using various macros
 * in comments starting with %. The most important macro
 * is "block", and it specifies that a block should be
 * generated for an **exported** function.
 */
enum on_off{
    //%block='on'
    turnon,
    //%block='off'
    turnoff
}
enum timerunning{
    //% block="1 minute"
    oneminute,
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
    sixtyminutes 
}
//% color="#fec636" weight=100 icon="\uf0e7"
namespace electrophoresis {

    
     //% block="Turn %start the electrophoresis" blockGap=8
     //% weight=100
     export function start_electrophoresis(start:on_off):void{
        switch (start){
            case on_off.turnon:
            pins.D12.digitalWrite(false) 
            ;
            case on_off.turnon:
            pins.D12.digitalWrite(true) 
            ;
        }
          
     }
     

    /* @param start, turn on/off the electrophoresis eg:on_off.turnon
    /* @param time, electrophoresis time eg: timerunning.thirtyminutes
    */

	//% block="Run the electrophoresis during %time" blockGap=16
    //% weight=90
    export function time_electrophoresis(time: timerunning): void {
     switch (time){
	    case timerunning.oneminute:
        pins.D10.digitalWrite(false)
	    pixel.setColor(0xff0000)
        pause(60*1000)
	    pixel.setColor(0xffff00)
		;
        case timerunning.thirtyminutes:
        pins.D10.digitalWrite(false)
        pause(30*60*1000)
		;
        case timerunning.thirtyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(35*60*1000)
		;
        case timerunning.fortyminutes:
        pins.D10.digitalWrite(false)
        pause(40*60*1000)
		;
        case timerunning.fortyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(45*60*1000)
		;
        case timerunning.fiftyminutes:
        pins.D10.digitalWrite(false)
        pause(50*60*1000)
		;
        case timerunning.fiftyfiveminutes:
        pins.D10.digitalWrite(false)
        pause(55*60*1000)
		;
        case timerunning.sixtyminutes:
        pins.D10.digitalWrite(false)
        pause(60*60*1000)
		;
		   
     } 
    pins.D10.digitalWrite(true)
	pixel.setColor(0x007fff)
    pins.D12.digitalWrite(true) 
    }

    // note that Caml casing yields lower case
    // block text with spaces

}
