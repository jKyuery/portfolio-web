import os, smtplib
from flask import Flask, request, render_template
from email.mime import multipart

app = Flask(__name__)

# should probably cover for edge cases

# @app.errorhandler(404)
# def not_found(e):
#     return render_template("404.html")

## TODO: Get values from front-end and send e-mail based on values ##
def send_mail(email, password, FROM, TO, msg):
    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.starttls()
    server.login(email, password)
    server.sendmail(FROM, TO, msg.as_string())
    server.quit()

@app.route("/", methods = ["POST", "GET"])
def index():
    # Get form data from react.js frontend
    # if request.method == "GET":
        
    if request.method == "POST":
        name = request.form.get('contactName')
        email = request.form.get('contactEmail')
        msg = request.form.get('contactMessage')
        sbj = request.form.get('contactSubject')
        
        # Check for empty data
        if not name or not email or not msg:
            err_st = "Please fill out the required fields."
            return render_template('index.html',
                error_statement = err_st,
                name = name,
                email = email,
                msg = msg)
        else:
            m = multipart.MIMEMultipart("alternative")
            m['From'] = email
            m["To"] = "" # Reciever
            m["Subject"] = sbj
            m.attach(msg)
            
            # Send email given the form data // NOTE: will test on some dummy email for testing
            send_mail("", os.getenv("PW"), email, "", m)
            success = "Message sent successfully"
            return render_template('index.html', success_statement = success)
        
    return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True)