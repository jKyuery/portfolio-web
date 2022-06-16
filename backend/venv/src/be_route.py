from doctest import debug_script
import os
from unicodedata import name
from flask import Flask, request, redirect, url_for, render_template
app = Flask(__name__)

key = os.urandom(24).hex()

app.config['SECRET_KEY'] = key

# required fields: message, name, email, subject is optional
msgs = [{'name': 'name', 'email':'email', 'message':'message', 'subject':'subject'}]

# should probably cover for edge cases

# @app.errorhandler(404)
# def not_found(e):
#     return render_template("404.html")

## TODO: Get values from front-end and send e-mail based on values ##
@app.route("/", methods = ["POST"])
def contact():
    if request.method == "POST":
        c_name = request.form['name']
        c_email = request.form['email']
        c_msg = request.form['message']
        #c_sbj = request.form['subject'] ## optional

    contact = msgs(
        name = c_name,
        email = c_email,
        message = c_msg,
        #subject = c_sbj
    )

    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)