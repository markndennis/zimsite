import webapp2
import os


        
class Site(webapp2.RequestHandler):
    def get(self):
        self.redirect('/assets/agency/index.html')
        
class Flip(webapp2.RequestHandler):
    def get(self):
        self.redirect('assets/agency/flip.html')
        

application = webapp2.WSGIApplication([
    ('/', Site),
    ('/flip', Flip)
], debug=True)


