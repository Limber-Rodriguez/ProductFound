import {Pipe,PipeTransform} from '@angular/core';
 
let mensaje= '';
@Pipe({
    name:'fecha'
})
export class FechaPipe implements PipeTransform{
    transform(value:number):string{
        
        let fin = Date.now();
        let min = value - fin;
        min = Math.abs(min);
        let hora = (new Date(fin).getHours())-(new Date(value).getHours());
        hora = Math.abs(hora);
        let minutos = (new Date(min)).getMinutes();
        let meses = (new Date(fin).getMonth())-(new Date(value).getMonth());
        meses = Math.abs(meses);
        let segundo = (new Date(fin).getSeconds())-(new Date(value).getSeconds());
        segundo = Math.abs(segundo);
        let dia = (new Date(fin).getDay())-(new Date(value).getDay());
        dia = Math.abs(dia);

        if(hora > 24 && dia >= 1){
            return mensaje='Hace '+ dia +' dias';
        }
        if(hora < 1 && minutos < 60 && minutos > 2 ){
            return mensaje='hace '+minutos+' Minutos';
        }if(meses > 1){
            return mensaje='Hace '+meses+' Meses';
        }if(hora != 0 && hora < 24){
            return mensaje= 'hace '+hora+' horas y '+minutos+' Minutos';
        }if(hora < 1 && minutos < 3){
            return mensaje='Hace un Momento';
        }
    
        // if(diferenciaMinutos < 0){
		// 	diferenciaHoras -= 1;
		// 	diferenciaMinutos = 60 - (minutos1 - minutos2);
		// }
    }
}