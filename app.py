from flask import Flask
from flaskcors import CORS
from pusher import pusher
import simplejson

app = Flask(__**name**__)
cors = CORS(app)
app.config_[_'CORSHEADERS'] =  'Content-Type'

pusher = pusher.Pusher(
    app_id = 'PUSHER_APP_ID'

    key = 'PUSHER_APP_KEY'
    secret = 'PUSHER_APP_SECRET'
    cluster = 'PUSHER_APP_CLUSTER'

    ssl = True
)

@app.route('/')
def index():
    return render_template('index.html')


#admin control
@app.route('/admin')
def admin():
    return render_template('admin.html')


#new guest
@app.route('/new/guest')
def guestUser():
    data = request.json
    pusher.trigger(u'general-channel', u'new-guest-details', {
        'name' : data_[_'name']
        'email' : data_[_'email']
    })

    return json.dumps(data)

