package app.web

import grails.plugin.springsecurity.annotation.Secured


@Secured(["permitAll"])
class RegisterController extends grails.plugin.springsecurity.ui.RegisterController {


}
