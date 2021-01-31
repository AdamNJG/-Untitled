package app.web


import groovy.transform.EqualsAndHashCode
import groovy.transform.ToString
import grails.compiler.GrailsCompileStatic

@GrailsCompileStatic
@EqualsAndHashCode(includes='username')
@ToString(includes='username', includeNames=true, includePackage=false)
class User implements Serializable {

	private static final long serialVersionUID = 1

	String username
	String password
	String email
	boolean enabled = true
	boolean accountExpired
	boolean accountLocked
	boolean passwordExpired

	static hasOne = [ profile : Profile ]

	Set<Role> getAuthorities() {
		(UserRole.findAllByUser(this) as List<UserRole>)*.role as Set<Role>
	}

	static constraints = {
		password nullable: false, blank: false, password: true
		username nullable: false, blank: false, unique: true
		email nullable: false, blank: false, email: true, unique: true
		profile nullable: true
	}

	static mapping = {
		table '`User`'
		password column: '`password`'
		cache true
	}
}
