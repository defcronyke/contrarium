import webapp2
import index
import contrarium

app = webapp2.WSGIApplication([
    ('/contrary', contrarium.Contrarium),
    ('/', index.Index),
], debug=True)
