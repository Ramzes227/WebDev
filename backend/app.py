from flask import Flask
from frontend_blueprint import frontend_blueprint

app = Flask(__name__)

# Регистрация Blueprint в приложении Flask
app.register_blueprint(frontend_blueprint)

if __name__ == '__main__':
    app.run(debug=True)
