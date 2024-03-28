from flask import Blueprint, render_template

frontend_blueprint = Blueprint('frontend', __name__, static_folder='frontend/build')

@frontend_blueprint.route('/')
def index():
    return render_template('index.html')
