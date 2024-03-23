from flask import Flask, render_template

app = Flask(__name__, static_folder='frontend/build')  # Указываем папку build как папку со статическими файлами

@app.route('/')
def index():
    return render_template('frontend/build/index.html')

if __name__ == '__main__':
    app.run(debug=True)
