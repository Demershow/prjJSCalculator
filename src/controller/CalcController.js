class CalcController {



    constructor() {

        this._operation = [];
        this._displayCalcEL = document.querySelector('#display');
        this._dateEL = document.querySelector('#data');
        this._timeEL = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }


    //Bloco que executa na iniciação da pag
    initialize() {

        this.setdisplayDateTime();

        //Comando para executar o comando a cada X milisegundos
        setInterval(() => {
            this.setdisplayDateTime();
        }, 1000);

    }

    //Método para adicionar multiplos eventos
    addEventListenerAll(element, events, fn) {

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    clearALL() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    addOp(value) {
        this._operation.push(value);
    }

    setError() {
        this.displayCalc = "Error";
    }

    //Método exec button
    execBtn(value) {
        switch (value) {

            case 'ac':
                this.clearALL
                break;

            case 'ce':
                this.clearEntry
                break;

            case 'soma':
                this.soma
                break;

            case 'subtracao':
                this.soma
                break;

            case 'divisao':
                this.soma
                break;

            case 'multiplicacao':
                this.soma
                break;

            case 'porcento':
                this.soma
                break;

            case 'igual':
                this.soma
                break;
            
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOp(parseInt(value));

            default:
                this.setError
                break;
        }
    }

    //Método da funcionalidade dos botões
    initButtonsEvents() {

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");


        buttons.forEach((btn, index) => {

            this.addEventListenerAll(btn, 'click drag', e => {

                let textBtn = console.log(btn.className.baseVal.replace("btn-", ""));
                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e => {

                btn.style.cursor = "pointer"

            });


        });
    }

    //Método da data/hora
    setdisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this.locale, {
            day: "2-digit",
            month: "short",
            year: "numeric"
        });
        this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
    }

    get displayTime() {

        return this._timeEL.innerHTML;

    }

    set displayTime(value) {

        return this._timeEL.innerHTML = value;

    }

    get displayDate() {

        return this._dateEL.innerHTML;

    }

    set displayDate(value) {

        return this._dateEL.innerHTML = value;

    }

    get displayCalc() {

        return this._displayCalcEL.innerHTML;

    }

    set displayCalc(value) {

        this._displayCalcEL.innerHTML = value;

    }

    get currentDate() {

        return new Date();

    }

    set currentDate(valor) {
        this._currentDate = valor;
    }

}

