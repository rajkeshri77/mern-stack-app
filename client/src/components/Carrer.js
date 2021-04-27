import React from 'react';
import axios from 'axios';

class Carrer extends React.Component {
    constructor(props) {
        super(props)
    
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhone = this.onChangePhone.bind(this);
        this.onChangeFile = this.onChangeFile.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
            name: '',
            email: '',
            phone: '',
            file: null
        }
    }

    onChangeName(e) {
        this.setState({ name: e.target.value })
      }
      
      onChangeEmail(e) {
        this.setState({ email: e.target.value })
      }
      
      onChangePhone(e) {
        this.setState({ phone: e.target.value })
      }
      
      onChangeFile(e) {
        this.setState({ docFile: e.target.value })
      }

      onSubmit(e) {
        e.preventDefault()
      
        const carrerObject = {
            name: this.state.name,
            email: this.state.email,
            phone: this.state.phone,
            file: this.state.docFile
        };
      
        axios.post('/carrer', carrerObject)
                  .then((res) => {
                      console.log(res.data)
                  }).catch((error) => {
                      console.log(error)
                  });
      
              this.setState({ name: '', email: '', phone: '', file: '' })
          }

    componentDidMount() {
        window.scrollTo(0, 0);
    }
    render () {
        return (
            <div>
                <section class="py-md-4 pt-md-8">
                    <div class="container">
                    <div class="row align-items-center justify-content-between">
                    <div class="col-12 col-md-6">
                        
                        <h2>
                        Make Your Career
                        <span class="text-primary-desat"><br /> With Us </span>
                        </h2>

                        
                        <p class="font-size-lg text-muted mb-6 mb-md-0">
                        Develop a refined list of career options by examining your interests, 
                        skills, and values through self-assessment.
                        <br /><br />
                        Narrow your career options by reviewing career information, researching companies, 
                        and talking to professionals in the field. You can further narrow your list by doing 
                        internship at INetwork Hub.
                        </p>
                    </div>
                    <div class="col-12 col-md-6 col-xl-5">
                        <div class="row no-gutters">
                        <div class="position-relative">
                            
                            <div class="w-110 float-right p-1 bg-white shadow-lg">
                            {/* <!-- <img src="images/photo-21.jpg" class="img-fluid" alt="..." /> --> */}
                            <lottie-player src="json/career.json" background="transparent" speed="0.8" loop autoplay>
                            </lottie-player>
                            </div>
                        </div>
                        </div>
                        
                    </div>
                    </div>
                    
                </div>
                
                </section>


                <section class="pt-6 pt-md-8 pb-8">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12 col-md-10 col-lg-8 text-center">
                        
                        <h2>Find The <span class="text-theme">Right Job</span> For You.</h2>
            
                        
                        <p class="font-size-lg text-gray-700 mb-7 mb-md-9">
                            Right now we are looking some candidate for the below technologies.
                        </p>
                        </div>
                    <div class="col-xl-10">
                        <div class="row no-gutters mb-3 d-none d-md-flex">
                        <div class="col-xl-8 col-lg-7 col-md-6">
                            <span class="text-small text-muted" style={{marginLeft: '60px'}}><b>Role</b></span>
                        </div>
                        <div class="col">
                            <span class="text-small text-muted"><b>Location</b></span>
                        </div>
                        <div class="col">
                            <span class="text-small text-muted" style={{marginLeft: '25px'}}><b>Apply</b></span>
                        </div>  
                    </div>
                        <div class="list-group list-group-flush ml-4">
                        <div class="" id="showListedJob"><div class="row no-gutters py-3 pt-2">
                        <div class="col-xl-8 col-lg-7 col-md-6">
                            <h5 class="mb-0">Node Developer</h5>
                            </div>
                            <div class="col-md">
                            <span>Kolkata</span>
                            </div>
                            <div class="col-md" style={{cursor: 'pointer'}}>
                            <a
                                    href="www.inetworkhub.com"
                                    class="btn btn-xs btn-primary"
                                    data-toggle="modal"
                                    data-target="#apply"
                                >
                                    Apply now
                                </a>
                            </div></div>
                        <div class="row no-gutters py-3 pt-2">
                        <div class="col-xl-8 col-lg-7 col-md-6">
                            <h5 class="mb-0">Sales Executive</h5>
                            </div>
                            <div class="col-md">
                            <span>Kolkata</span>
                            </div>
                            <div class="col-md" style={{cursor: 'pointer'}}>
                            <a
                            href="www.inetworkhub.com"
                            class="btn btn-xs btn-primary"
                            data-toggle="modal"
                            data-target="#apply"
                            >
                            Apply now
                            </a>
                            </div></div>
                        </div>
                        </div>
                        <div class="m-1">
                    
                    </div>
                    </div>
                    </div>
                </div>
                </section>
                <div
                class="modal fade"
                id="apply"
                tabindex="-1"
                aria-labelledby="applyTitle"
                style={{display: 'none'}}
                aria-hidden="true"
                >
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                    <div class="modal-body">
                        
                        <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">×</span>
                        </button>

                        
                        <h2 class="font-weight-bold text-center mb-1" id="applyTitle">
                        Apply For This Job
                        </h2>

                        
                        <p class="font-size-lg text-center text-muted mb-6 mb-md-8">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam,
                        architecto?
                        </p>

                        
                        <form onSubmit={this.onSubmit} enctype="multipart/form-data">
                        <div class="row">
                            <div class="col-12 col-md-6">
                            <div class="form-label-group">
                                <input
                                type="text"
                                class="form-control form-control-flush"
                                name="name"
                                id="Name"
                                placeholder="Name"
                                value={this.state.name}
                                onChange={this.onChangeName}
                                required
                                />
                                <label for="Name">Name</label>
                            </div>
                            </div>
                            <div class="col-12 col-md-6">
                            <div class="form-label-group">
                                <input
                                type="text"
                                class="form-control form-control-flush"
                                id="Emailid"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                                placeholder="Email Address"
                                required
                                />
                                <label for="Emailid">Email Address</label>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12 col-md-6">
                            
                            <div class="form-label-group">
                                <input
                                type="email"
                                class="form-control form-control-flush"
                                id="phone"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.onChangePhone}
                                placeholder="Contact Number"
                                required
                                />
                                <label for="phone">Contact Number</label>
                            </div>
                            </div>
                            <div class="col-12 col-md-6">
                            
                            <div class="form-label-group">
                                <input
                                type="file"
                                class="form-control form-control-flush"
                                id="uploadresume"
                                name="docFile"
                                value={this.state.file}
                                onChange={this.onChangeFile}
                                placeholder="Upload Resume"
                                required
                                />
                                <label for="uploadresume">Upload Resume</label>
                            </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-12">
                            
                            <button class="btn btn-block btn-primary mt-3 lift" type="submit">
                                Apply
                            </button>
                            </div>
                        </div>
                        </form>
                    </div>
                    </div>
                </div>
                </div>
</div>
        );
    }
}

export default Carrer;