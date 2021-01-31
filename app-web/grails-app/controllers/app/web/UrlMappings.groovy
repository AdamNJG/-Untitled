package app.web

class UrlMappings {

    static mappings = {
        "/$controller/$action?/$id?(.$format)?"{
            constraints {
                // apply constraints here
            }
        }

        "/"(uri: "/post/wall")
        "500"(view:'/error')
        "404"(view:'/notFound')
        "/register"(uri: "/register/register")
    }
}
