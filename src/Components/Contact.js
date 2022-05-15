import React, {Component} from 'react';

class Contact extends Component{
    render(){

        if(this.props.data){
            var name = this.props.data.name;
            var street = this.props.data.street;
            var city = this.props.data.city;
            var state = this.props.data.state;
            var zip = this.props.data.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            //var resumeDownload = this.props.data.resumedownload;
        }
    }

    return()
}