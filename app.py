from flask import Flask,request,jsonify,render_template
import suggetion as sg
import imdb as im

app=Flask(__name__)


name=""
@app.route("/",methods=["POST","GET"])
def main():
    global name
    if request.method=="POST":
        try:
            name=request.form["ak"]
            return render_template("main.html",li=sg.moviename(name),sugested=sg.suggetion(name))
        # else:
        except:
            return render_template("error.html")
    else:
        try:
            return render_template("home.html",popular=im.popular()) 
        except:
            return render_template("error.html")


    

if __name__=="__main__":
    # app.run(debug=True,host="192.168.43.244")
    app.run(debug=True)