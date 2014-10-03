import webapp2
import jinja2
import os

JINJA_ENVIRONMENT = jinja2.Environment(
    loader=jinja2.FileSystemLoader(os.path.dirname(__file__)),
    extensions=['jinja2.ext.autoescape'],
    autoescape=True)

class MainPage(webapp2.RequestHandler):
    def get(self):
       # self.response.headers['Content-Type'] = 'text/html'
       # self.response.write('<h1>Hello, World!</h1>')
        template = JINJA_ENVIRONMENT.get_template('test.html')
        self.response.write(template.render())
        
class Site(webapp2.RequestHandler):
    def get(self):
        self.redirect('/assets/agency/index.html')
        

application = webapp2.WSGIApplication([
    ('/', Site),
], debug=True)


