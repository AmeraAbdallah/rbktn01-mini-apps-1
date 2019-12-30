
class Form1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            email: '',
            password: ''
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
    }

    onChangeName(event){
        let name = event.target.value;
        this.setState(()=>({name}));
    }

    onChangeEmail(event){
        let email = event.target.value;
        this.setState(()=>({email}));
    }

    onChangePassword(event){
        let password =  event.target.value;
        this.setState(()=>({password}));
    }

    render(){
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                this.props.onNext(this.state);
            }}>
                <div>
                    <input required type = 'text' placeholder = 'Name' onChange={(event) => this.onChangeName(event)}/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Email' onChange={(event) => this.onChangeEmail(event)} /> 
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Passsword' onChange= {(event) => this.onChangePassword(event)}/> 
                </div>
                <button type = "submit">Next</button>
            </form>
        )
    }
}

class Form2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            address1: '',
            address2: '',
            state: '',
            zipCode: '',
            phoneNumber: ''
        }
    }

    onChangeAddress1(event){
        let address1 = event.target.value;
        this.setState(() => ({address1}));
    }

    onChangeAddress2(event){
        let address2 = event.target.value;
        this.setState(()=>({address2}));
    }

    onChangeState(event){
        let state = event.target.value;
        this.setState(()=>({state}));
    }

    onChangeZipCode(event){
        let zipCode = event.target.value;
        this.setState(() => ({zipCode}));
    }

    onChangePhoneNumber(event){
        let phoneNumber = event.target.value;
        this.setState(() => ({phoneNumber}));
    }

    render(){
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                this.props.onNext(this.state);
            }}>
                <div>
                    <input required type = 'text' placeholder = 'Ship Address Lin1'/>
                </div>
                <div>
                    <input type = 'text' placeholder = 'Ship Address Line 2'/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'State'/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Zip Code'/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Phone Number'/>
                </div>
                <button>Next</button>
            </form>
        )
    }
}

class Form3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            creditCardNumber: '',
            expiryDate: '',
            cvv: '',
            billingZipCode: ''
        }
        this.onChangeCreditCardNumber = this.onChangeCreditCardNumber.bind(this);
        this.onChangeExpiryDate = this.onChangeExpiryDate.bind(this);
        this.onChangeCvv = this.onChangeCvv.bind(this);
        this.onChangeBillingZipCode = this.onChangeBillingZipCode.bind(this);
    }

    onChangeCreditCardNumber(event){
        let creditCardNumber = event.target.value;
        this.setState(()=>({creditCardNumber}))
    }

    onChangeExpiryDate(event){
        let expiryDate = event.target.value;
        this.setState(() => ({expiryDate}));
    }

    onChangeCvv(event){
        let cvv = event.target.value;
        this.setState(() => ({cvv}));
    }

    onChangeBillingZipCode(event){
        let billingZipCode = event.target.value;
        this.setState(() => ({billingZipCode}));
    }

    render(){
        return(
            <form onSubmit = {(e) => {
                e.preventDefault();
                this.props.onNext(this.state);
            }}>
                <div>
                    <input required type = 'text' placeholder = 'Credit Card Number'/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'expiry date'/>
                </div>
                <div>
                    <input required type = 'text' placeholder = 'CVV'/>
                </div>
                <div>
                    <input type = 'text' placeholder = ' billing zip code'/>
                </div>
                <button>Next</button>
            </form>
        )
    }
}

function Purchase (props){
    return(
        <div>
            summery
            <button>Purchase</button>
        </div>
    ) 
}

// import Form1 from './form1';
// import Form2 from './form2';
// import Form3 from './form3';
// import Purchase from './Purchase';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            step: 1
        };
        this.form1 = this.form1.bind(this);
        this.form2 = this.form2.bind(this);
        this.form3 = this.form3.bind(this)
    }

    form1(data){
         fetch('http://localhost:8080/form1', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
        }).then( response => {
            console.log(response);
            this.setState(()=>({step: 2}));
        }).catch(err => {
            console.log(err);
        })
    }

    form2(data){
        fetch('http://localhost:8080/form2', {
           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
             },
             body: JSON.stringify(data)
       }).then( response => {
           console.log(response);
           this.setState(()=>({step: 3}));
       }).catch(err => {
           console.log(err);
       })
   }

   form3(data){
        fetch('http://localhost:8080/form3', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
    }).then( response => {
        console.log(response);
        this.setState(()=>({step: 4}));
    }).catch(err => {
        console.log(err);
    })
    }
    
    render(){
        let Form = this.state.step === 1 ? 
        (<Form1 onNext = {this.form1} />) :
        this.state.step === 2 ? (<Form2 onNext = {this.form2}/>) : 
        this.state.step === 3 ?(<Form3 onNext = {this.form3}/>) :
        (<Purchase/>);

        return(
            Form
        )
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));