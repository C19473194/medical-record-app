import React from 'react';
import url from '../constants/link';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, CloseButton, Button } from 'react-bootstrap';
import profileImg from '../assets/profile.jpg';
import Header from '../components/Header';
import ToggleDisplay from '../components/ToggleDisplayBar';
import * as Colors from '../constants/colors';

let view = 0;

// displays patient profile
function PatientProfile(){
    const ProfileInfo = [
        { 
            RegisteredWith : "Doctor name",
            id: 'P12H4',
            name: 'QAN',
            DOB: new Date(),
            gender: 'Male',
        },
        
    
    ]

    return (
        <Container fluid>
            {ProfileInfo.map((info) => {
                return (
                    <Card className="d-flex flex-row p-3 mb-3" style={{backgroundColor: Colors.white }}>
                        <Card.Img className="d-none d-md-flex" style={{width: '6rem', height: '100px', marginRight: '1rem'}} src={profileImg}/>
                        <Card.Body className="d-flex flex-column w-auto align-items-start">
                            <Card.Text style={{fontSize: '16px'}} className="mb-2">RegisteredWith: {info.Registeredwith}</Card.Text>
                            <Card.Text style={{fontSize: '14px'}} className="mb-2">{info.id}</Card.Text>
                            <Card.Subtitle style={{fontSize: '20px'}} className="mb-1">{info.name}</Card.Subtitle>
                           <Card.Text style={{fontSize: '16px'}} className="mb-1">{info.gender}</Card.Text>
                           <Button style={{backgroundColor: Colors.lightGreen, border: 'none', height: '2.5rem', width: '8rem'}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 20 20">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                </svg>
                                Edit
                            </Button>
                        </Card.Body>
                        <Button className='h-25' style={{backgroundColor: Colors.white, border: 'none'}} >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill={Colors.lightBlue} class="bi bi-caret-right-fill" viewBox="0 0 16 16">
                                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                            </svg>
                        </Button>
                    </Card>
                )
            })}
        </Container>
    )
}
// this function is used to make appintment with doctor
function MakeAppointment(){
    const aptList = [{
        date: new Date(),
        SelectTime: "",
        
    }]
    
    return (
        <Container>
            {aptList.map((request) => {
                return (
                    <Card className="d-flex w-100 flex-row p-3 mb-3" style={{backgroundColor: Colors.white }}>
                        
                        <Card.Body className="d-flex flex-column w-auto align-items-start">
                          
                            <Card.Text style={{fontSize: '16px'}} className="mb-2">time: {request.time}</Card.Text>
                            <Card.Text style={{fontSize: '16px'}} className="mb-1">Date: {request.date.toLocaleDateString()}</Card.Text>
                        </Card.Body>
                        <Container className="w-auto d-flex justify-content-lg-end justify-content-start flex-lg-row flex-column">
                            <Button style={{backgroundColor: Colors.lightGreen, border: 'none', height: '2.5rem', width: '8rem'}} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 20 20">
                                    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                </svg>
                                Confirm
                            </Button>
                           
                           
                           
                        </Container>
                        
                    </Card>
                    
                )
                view++;
            })}
        </Container>

    )
}
function ViewAppointment(){
    
    
    // const view = [{
        
        
    // }]
    
   

       
      if (view === 0)
      { return (
        <Container>
                 
                    
                        <Card className="d-flex w-100 flex-row p-3 mb-3" style={{backgroundColor: Colors.white }}>
                            
                            
                            <Container className="w-auto d-flex justify-content-lg-end justify-content-start flex-lg-row flex-column">
                               
                            <h3>You have not made any appointment yet</h3>
                               
                               
                            </Container>
                            
                        </Card>
                
                    
           
            </Container>
    
        )
        
      
      
      }
      else { 

        return (
            <Container>
                 
                    
                        <Card className="d-flex w-100 flex-row p-3 mb-3" style={{backgroundColor: Colors.white }}>
                            
                            
                            <Container className="w-auto d-flex justify-content-lg-end justify-content-start flex-lg-row flex-column">
                                <Button style={{backgroundColor: Colors.lightGreen, border: 'none', height: '2.5rem', width: '8rem'}} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 20 20">
                                        <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
                                        <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
                                    </svg>
                                    Cancel
                                </Button>
                               
                               
                               
                            </Container>
                            
                        </Card>
                
                    
           
            </Container>
    
        )
        
      }
    
    } 
   

export default function PatientPage() {
    // set id 
    const [ id, setID] = React.useState();

    // navigation
    const navigate = useNavigate();

    // trigger visibility of other info
    const [visibleInfo, setVisibleInfo] = React.useState(false);
    const [visibleRequests, setVisibleRequests] = React.useState(false);

    
    React.useEffect(() => {
        // verify token
        fetch(url + "/auth", {
            method: "POST",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                token: localStorage.getItem('token')
            })
        }).then(res => res.json())
        .then(result => {
            if (result.login){
                setID(result.id);
            }
            else {
                navigate('/')
            }
        }).catch(err => {
            if (err) {
                navigate('/');
            }
            
        })
    },[])
    return (
        <React.Fragment>
            <Header isPatient={true} id={id} />
            <Container fluid className="d-flex flex-column align-items-center my-5 px-lg-5 px-sm-2" id="info" >
                <ToggleDisplay title="Profile" setVisible={setVisibleInfo} state={visibleInfo}/>
                {visibleInfo && <PatientProfile/>}
                
            </Container>
            
           
            <Container fluid className="d-flex flex-column align-items-center my-5 px-lg-5 px-sm-2" id="registrationRequest">
                <ToggleDisplay title="Make Appointment" setVisible={setVisibleRequests} state={visibleRequests} />
                {visibleRequests && <MakeAppointment/>}

            </Container>
            <Container fluid className="d-flex flex-column align-items-center my-5 px-lg-5 px-sm-2" id="registrationRequest">
                <ToggleDisplay title="View Appointment" setVisible={setVisibleRequests} state={visibleRequests} />
                {visibleRequests && <ViewAppointment/>}

            </Container>


        </React.Fragment>
    )
}