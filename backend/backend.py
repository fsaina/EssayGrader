from flask import Flask, redirect, url_for, request, jsonify
from flask_cors import CORS
from model import DLGrader

app = Flask(__name__)
CORS(app)

grader = DLGrader('../models/GoogleNews-vectors-negative300.bin', '../models/best_model.h5')

@app.route('/grade',methods = ['POST'])
def grade():
  text = request.json['text']
  score = grader.grade(text)
  return jsonify(grade=score)

if __name__ == '__main__':
   app.run(debug = True)
