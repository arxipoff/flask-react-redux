import os
import json
from flask import Flask, render_template, jsonify
from flask_cors import CORS


template_dir = os.path.abspath('../client/dist')
app = Flask(__name__, template_folder=template_dir, static_folder=template_dir)
CORS(app)


@app.route('/')
def index():
   return render_template('index.html')

@app.route('/api')
def api():
   filename = os.path.join('./', 'dashbord_data.json')
   with open(filename) as dashbord_file:
      data = json.load(dashbord_file)
   return jsonify(data)


if __name__ == '__main__':
   app.run(host='localhost', port=3000)
