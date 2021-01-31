package app.web

import grails.plugin.springsecurity.annotation.Secured

@Secured(['ROLE_ADMIN','IS_AUTHENTICATED_FULLY'])
class UserController {

    static scaffold = User

}
