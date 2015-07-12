import webapp2
import index

app = webapp2.WSGIApplication([
    ('/', index.Index),
], debug=True)
