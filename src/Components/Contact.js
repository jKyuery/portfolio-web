import React, {Component} from 'react';

class Contact extends Component{

    // Get input from form
    constructor(props){
        super(props);
        // Name, email, subject, message
        this.state = {
            contact:{
                contactName: props.contactName,
                contactMsg: props.contactMsg,
                contactSbj: props.contactSbj,
                contactEmail: props.contactEmail
            }
        }
    }

    // handlers 
    handleNameChange(event){
        var contact = this.state.contact;
        contact.contactName = event.target.value;

        this.setState({contact: contact});
    }
    handleMsgChange(event){
        var contact = this.state.contact;
        contact.contactMsg = event.target.value;

        this.setState({contact: contact});
    }

    handleSbjChange(event){
        var contact = this.state.contact;
        contact.contactSbj = event.target.value;

        this.setState({contact:contact});
    }

    handleMailChange(event){
        var contact = this.state.contact;
        contact.contactEmail = event.target.value;

        this.setState({contact:contact});
    }

    render(){

        if(this.props.data){
            var name = this.props.data.name;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            //var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }

        return(
            <section id = "contact">
                <div className='row section-head'>
                    <div className='two columns header-col'>
                        <h1><span>Get in touch.</span></h1>
                    </div>

                    <div className='ten columns'>
                        <p className='lead'>{message}</p>
                    </div>
                </div>

                <div className='row'>
                    <div className='eight columns'>
                        <form onSubmit = {this.handleSubmit} action="#" method='POST' id='contactForm' name='contactForm'>
                            <fieldset>
                                <div>
                                    <label htmlFor='contactName'>Name<span className='required'>*</span></label>
                                    <input type = 'text' value = {this.state.contact.contactName} size = "35" 
                                    id= "contactName" name = "contactName" onChange={this.handleNameChange.bind(this)}/>
                                </div>

                                <div>
                                    <label htmlFor="contactEmail">Email <span className='required'>*</span></label>
                                    <input type='text' value = {this.state.contact.contactEmail} size = "35" 
                                    id = "contactEmail" name = "contactEmail" onChange={this.handleMailChange.bind(this)}/>
                                </div>

                                <div>
                                    <label htmlFor = 'contactSubject'>Subject</label>
                                    <input type='text' value = {this.state.contact.contactSbj}
                                    size = "35" id = "contactSubject" name = "contactSubject" onChange={this.handleSbjChange.bind(this)}/>
                                </div>

                                <div>
                                    <label htmlFor='contactMessage'>Message <span className='required'>*</span></label>
                                    <textarea cols="50" value={this.state.contact.contactMsg}
                                    rows = "15" id = "contactMessage" name = "contactMessage" onChange={this.handleMsgChange.bind(this)}></textarea>
                                </div>

                                <div>
                                    <button className='submit'>Submit</button>
                                    <span id = "image-loader">
                                        <img alt = "" src = "images/loader.gif"/>
                                    </span>
                                </div>
                            </fieldset>
                        </form>

                        <div id = "message-warning">Error!</div>
                        <div id = "message-success">
                            <i className='fa fa-check'></i>Your message was sent successfully!<br/>
                        </div>

                    </div>

                    <aside className='four columns footer-widgets'>
                        <div className='widget widget_contact'>
                            <h4>Address and Phone</h4>
                            <p className='address'>
                                {name}<br/>
                                {city}<br/>
                                {state}, {zip}<br/>
                                <span>{phone}</span><br/>
                            </p>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;