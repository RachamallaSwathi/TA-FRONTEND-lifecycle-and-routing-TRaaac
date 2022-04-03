import React from 'react';
let icon=['','user','email','age','address','contact','password']
class Main extends React.Component{
    constructor(props){
        super(props);
        this.state={
            currentUser:"",
            currentUserData:{
                name:"",
                email:"",
                age:"",
                address:"",
                contact:"",
                password:"",
                image:"",

            },
            new:false,


        }

        this.componentDidMount=()=>{
           fetch('https://randomuser.me/api/')
           .then((res)=>res.json())
           .then((data)=>{
              console.log(data.results[0]);
              const {name,email,dob,location,phone,login,picture}=data.results[0];
             this.setState({
                currentUser:data.results[0],
                currentUserData:{
                    name:name.first+" "+name.last,
                    email:email,
                    age:dob.age,
                    address:location.street+location.city+location.state+location.country,
                    contact:phone,
                    password:login.password,
                    image:picture.large,
                },
                new:true,
                active:false,
            })
           });
        }
    }

    handleClick=()=>{
        this.setState({new:false})
        fetch('https://randomuser.me/api/')
        .then((res)=>res.json())
        .then((data)=>{
           console.log(data.results[0]);
           const {name,email,dob,location,phone,login,picture}=data.results[0];
          this.setState({
             currentUser:data.results[0],
             currentUserData:{
                 name:name.first+" "+name.last,
                 email:email,
                 age:dob.age,
                 address:location.city,
                 contact:phone,
                 password:login.password,
                 image:picture.large,
             },
             new:true,
         })
        });
    }

    handleBtnClick=(e)=>{
        console.log(e.target.id);
        this.setState({
            active:true,
            activeBtn:e.target.id,
            activeBtnName:icon[e.target.id],
        })


    }

    

    render(){
        console.log('render');
        return (
            <center>
              <div>
                   
              </div>
              <div>
                   <div className="user">
                       <figure>
                           <img src={this.state.currentUser?this.state.currentUserData.image:""} alt=""/>
                           <hr/>
                             
                       </figure>
                       <span>My {this.state.active?this.state.activeBtnName:"name"}</span>
                       <h2 className="h2">{!this.state.active?this.state.currentUserData.name:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='1'?this.state.currentUserData.name:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='2'?this.state.currentUserData.email:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='3'?this.state.currentUserData.age:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='4'?this.state.currentUserData.address:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='5'?this.state.currentUserData.contact:""}</h2>
                       <h2>{this.state.active && this.state.activeBtn==='6'?this.state.currentUserData.password:""}</h2>
                       <div className="btns">
                           <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='1' ? "fa-solid fa-user active":"fa-solid fa-user"} id={1} ></i></button>
                           <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='2' ? "fa-solid fa-envelope-open active":"fa-solid fa-envelope-open"} id={2}></i></button>
                           <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='3' ? "fa-solid fa-calendar active":"fa-solid fa-calendar"} id={3}></i></button>
                            <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='4' ? "fa-solid fa-map active":"fa-solid fa-map"} id={4}></i></button>
                           <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='5' ? "fa-solid fa-phone-square active":"fa-solid fa-phone-square"} id={5}></i></button>
                           <button onClick={(e)=>this.handleBtnClick(e)}><i className={this.state.active && this.state.activeBtn==='6' ? "fa-solid fa-lock active":"fa-solid fa-lock"} id={6}></i></button>
                          
                       </div>
                       <div className="random"><button onClick={this.handleClick}>{this.state.new?"Random User":"Loading..."}</button></div>
                   </div>

              </div>
            </center>
        )
    }
}

export default Main;