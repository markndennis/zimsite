import webapp2
import os
        
class Site(webapp2.RequestHandler):
    def get(self):
        self.redirect('/assets/agency/index.html')
        

application = webapp2.WSGIApplication([
    ('/', Site),
], debug=True)


