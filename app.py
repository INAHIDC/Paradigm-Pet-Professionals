from flask import Flask, render_template, send_from_directory

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/pet-care/cats')
def cats():
    return render_template('cats.html')

@app.route('/pet-care/dogs') 
def dogs():
    return render_template('dogs.html')
 
@app.route('/pet-care/birds')
def birds():
    return render_template('birds.html')

@app.route('/pet-care/fish')
def fish():
    return render_template('fish.html')

@app.route('/pet-care/small-animals')
def small_animals():
    return render_template('small_animals.html')

@app.route('/booking')
def booking():
    return render_template('booking.html')

@app.route('/about-us')
def about_us():
    return render_template('about_us.html')

@app.route('/TASKONE')
def view_pdf():
    return render_template('view_pdf.html')

if __name__ == "__main__":
    app.run(debug=True)
