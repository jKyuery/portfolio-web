from doctest import debug_script
import os
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
    contact_name = request.json['name']


if __name__ == "__main__":
    app.run(debug=True)