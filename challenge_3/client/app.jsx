
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
                    <input required type = 'text' placeholder = 'Ship Address Lin1' onChange={(event) => this.onChangeAddress1(event)} />
                </div>
                <div>
                    <input type = 'text' placeholder = 'Ship Address Line 2' onChange={(event) => this.onChangeAddress2(event)} />
                </div>
                <div>
                    <input required type = 'text' placeholder = 'State' onChange={(event) => this.onChangeState(event)} />
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Zip Code' onChange={(event) => this.onChangeZipCode(event)} />
                </div>
                <div>
                    <input required type = 'text' placeholder = 'Phone Number' onChange={(event) => this.onChangePhoneNumber(event)} />
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
                    <input required type = 'text' placeholder = 'Credit Card Number' onChange={(event) => this.onChangeCreditCardNumber(event)} />
                </div>
                <div>
                    <input required type = 'text' placeholder = 'expiry date' onChange={(event) => this.onChangeExpiryDate(event)} />
                </div>
                <div>
                    <input required type = 'text' placeholder = 'CVV' onChange={(event) => this.onChangeCvv(event)} />
                </div>
                <div>
                    <input type = 'text' placeholder = ' billing zip code' onChange={(event) => this.onChangeBillingZipCode(event)} />
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
            <button onClick = {props.onConfirm}>Purchase</button>
        </div>
    ) 
}

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            step: 1,
            name: '',
            email: '',
            password: '',
            address1: '',
            address2: '',
            state: '',
            zipCode: '',
            phoneNumber: '',
            creditCardNumber: '',
            expiryDate: '',
            cvv: '',
            billingZipCode: ''
        };
        this.form1 = this.form1.bind(this);
        this.form2 = this.form2.bind(this);
        this.form3 = this.form3.bind(this);
        this.purchase = this.purchase.bind(this);
    }

    form1(data){
        this.setState(() => ({
            name: data.name,
            email: data.email,
            password: data.password,
            step: 2
        }))
    }

    form2(data){
        this.setState(() => ({
            address1: data.address1,
            address2: data.address2,
            state: data.state,
            zipCode: data.zipCode,
            phoneNumber: data.phoneNumber,
            step: 3
        }))
   }

   form3(data){
        this.setState(() => ({
            creditCardNumber: data.creditCardNumber,
            expiryDate: data.expiryDate,
            cvv: data.cvv,
            billingZipCode: data.billingZipCode,
            step: 4
        }))
    }

    purchase(){
        fetch('http://localhost:8080/purchase', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
        }).then( response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        })
    }
    
    render(){
        let Form = this.state.step === 1 ? 
        (<Form1 onNext = {this.form1} />) :
        this.state.step === 2 ? (<Form2 onNext = {this.form2}/>) : 
        this.state.step === 3 ?(<Form3 onNext = {this.form3}/>) :
        (<Purchase onConfirm = {this.purchase} />);

        return(
            Form
        )
    }
}

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));