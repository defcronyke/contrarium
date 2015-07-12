import webapp2
import jinja2
import os

class Index(webapp2.RequestHandler):

    def get(self):

        self.jinja_env = jinja2.Environment(
            loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
            extensions=['jinja2.ext.autoescape'],
            autoescape=True)

        self.response.headers['Content-Type'] = 'text/html'
        
        tmpl = self.jinja_env.get_template('templates/index.html')
        
        tmpl_vals = {}
        
        self.response.write(tmpl.render(tmpl_vals))

