#from crypt import methods
from flask import Flask, render_template

app = Flask(__name__)



messages = [{}]

@app.route('/create/', methods=('GET', 'POST'))

def create():
    return render_template()
