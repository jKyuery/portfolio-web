import os
from flask import Flask, render_template, request, url_for, flash, redirect 

app = Flask(__name__)

key = os.urandom(24).hex()

app.config['SECRET_KEY'] = key

# required fields: message, name, email, subject is optional
msgs = [{'name': 'name', 'email':'email', 'message':'message', 'subject':'subject'}]

# should probably cover for edge cases

@app.route('/Contact/', methods=('GET', 'POST'))
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        subject = request.form['subject']

        if not name:
            flash('Name is required!')
        elif not email:
            flash('Email is required!')
        elif not message:
            flash('Message is required!')
        # optional case if subject is given
        elif subject:
            msgs.append({'name':name, 'email':email, 'message':message, 'subject':subject})
        else:
            msgs.append({'name':name, 'email':email, 'message':message})
            return redirect(url_for('index'))

    return render_template('index.html')
