from doctest import debug_script
import os
from unicodedata import name
from flask import Flask, render_template, request, jsonify, send_from_directory
app = Flask(__name__)

key = os.urandom(24).hex()

app.config['SECRET_KEY'] = key

# required fields: message, name, email, subject is optional
msgs = [{'name': 'name', 'email':'email', 'message':'message', 'subject':'subject'}]

# should probably cover for edge cases

## TODO: Get values from front-end and send e-mail based on values ##
@app.route("/Contacts", methods = ["POST"])
def contact():
    c_name = request.json['name']
    c_email = request.json['email']
    c_msg = request.json['message']
    #c_sbj = request.json['subject'] ## optional

    contact = msgs(
        name = c_name,
        email = c_email,
        message = c_msg,
        #subject = c_sbj
    )

    return jsonify(contact)


if __name__ == "__main__":
    app.run(debug=True)