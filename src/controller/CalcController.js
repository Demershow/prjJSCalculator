class CalcController{



    constructor(){
    
        this._displayCalcEL = document.querySelector('#display');
        this._dateEL = document.querySelector('#data');
        this._timeEL = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
    }  


    //Bloco que executa na iniciação da pag
    initialize(){

        this.setdisplayDateTime();

    //Comando para executar o comando a cada X milisegundos
      setInterval(()=>{
        this.setdisplayDateTime();
      }, 1000);

    }

    //Método da data/hora
    setdisplayDateTime(){
        this.displayDate = this.currentDate.toLocaleDateString(this.locale,{
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get displayTime(){

        return this._timeEL.innerHTML;

    }

    set displayTime(value){

        return this._timeEL.innerHTML = value;

    }

    get displayDate(){

        return this._dateEL.innerHTML;

    }

    set displayDate(value){

        return this._dateEL.innerHTML = value;

    }

    get displayCalc(){
      
        return this._displayCalcEL.innerHTML;

    }

    set displayCalc(value){

        this._displayCalcEL.innerHTML = value;

    }

    get currentDate(){

        return new Date();

    }

    set currentDate(valor){
        this._currentDate = valor;
    }

}

