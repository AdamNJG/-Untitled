

// Added by the Spring Security Core plugin:
grails.plugin.springsecurity.userLookup.userDomainClassName = 'app.web.User'
grails.plugin.springsecurity.userLookup.authorityJoinClassName = 'app.web.UserRole'
grails.plugin.springsecurity.authority.className = 'app.web.Role'
grails.plugin.springsecurity.controllerAnnotations.staticRules = [
	[pattern: '/',               access: ['permitAll']],
	[pattern: '/error',          access: ['permitAll']],
	[pattern: '/index',          access: ['permitAll']],
	[pattern: '/index.gsp',      access: ['permitAll']],
	[pattern: '/shutdown',       access: ['permitAll']],
	[pattern: '/assets/**',      access: ['permitAll']],
	[pattern: '/**/js/**',       access: ['permitAll']],
	[pattern: '/**/css/**',      access: ['permitAll']],
	[pattern: '/**/images/**',   access: ['permitAll']],
	[pattern: '/**/favicon.ico', access: ['permitAll']]
]

grails.plugin.springsecurity.filterChain.chainMap = [
	[pattern: '/assets/**',      filters: 'none'],
	[pattern: '/**/js/**',       filters: 'none'],
	[pattern: '/**/css/**',      filters: 'none'],
	[pattern: '/**/images/**',   filters: 'none'],
	[pattern: '/**/favicon.ico', filters: 'none'],
	[pattern: '/**',             filters: 'JOINED_FILTERS']
]
grails.plugin.springsecurity.logout.postOnly = false
grails.plugin.springsecurity.ui.register.defaultRoleNames = ['ROLE_CUSTOMER']
grails.plugin.springsecurity.ui.encodePassword = true
grails.plugin.springsecurity.ui.register.emailFrom = "Adam.Goldsmith0@gmail.com"
grails.plugin.springsecurity.ui.forgotPassword.emailFrom = "Adam.Goldsmith0@gmail.com"

grails {
	mail {
		host = "email-smtp.us-east-2.amazonaws.com"
		'default' {
			from = "Adam.Goldsmith0@gmail.com"
		}
		port = 465
		username = "*****"
		password = "*****"
		props = ["mail.smtp.auth":"true",
				 "mail.smtp.socketFactory.port":"465",
				 "mail.smtp.socketFactory.class":"javax.net.ssl.SSLSocketFactory",
				 "mail.smtp.socketFactory.fallback":"false"]
	}
}
