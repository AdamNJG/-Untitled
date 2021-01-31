package app.web

    import grails.gorm.transactions.Transactional


    class BootStrap {


        /*def init = { servletContext ->
            populateUsers()
            populatePpc()
        }

        static def adminUser

        @Transactional
        def populateUsers() {
            def adminRole = new Role(authority: 'ROLE_ADMIN').save()
            def operatorRole = new Role(authority: 'ROLE_OPERATOR').save()
            def customerRole = new Role(authority: 'ROLE_CUSTOMER').save()

            adminUser = new User(username: 'admin', password: 'Password123',email: 'admin@hall.com').save()
            def operatorUser = new User(username: 'operator', password: 'Password123',email: 'operator@hall.com').save()
            def customerUser = new User(username: 'customer', password: 'Password123',email: 'customer@hall.com').save()

            UserRole.create adminUser, adminRole
            UserRole.create operatorUser, operatorRole
            UserRole.create customerUser, customerRole

            UserRole.withSession {
                it.flush()
                it.clear()
            }

            // assert User.count == 3
            // assert Role.count == 3
            // assert UserRole.count ==3
        }

        @Transactional
        def populatePpc() {
            if(Profile.count() == 0) {
                def profile = new Profile(user: adminUser, fullName: "admin admin").save(flush: true)
                def post = new Post(profile: profile, content: "firsteverpost!").save(flush: true)
                def comment = new Comment(post: post, content: "firstcomment", profile: post.profile).save(flush:true)
            }
        }

*/
    }

