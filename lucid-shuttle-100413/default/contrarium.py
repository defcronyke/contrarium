import webapp2
import cgi
import json
import re

class Contrarium(webapp2.RequestHandler):

    def post(self):

        req_body = json.loads(cgi.escape(self.request.body))
        
        search_terms = req_body['search_terms']
        
        req_body['search_terms'] = re.sub(r'\W+', ' ', search_terms)

        self.response.headers['Content-Type'] = 'application/json; charset=utf-8'
        self.response.write(json.dumps(req_body))

