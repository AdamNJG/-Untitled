package app.web



class Profile {
    User user
    String fullName
    String email
    byte[] photo

    static hasMany = [posts : Post, comments : Comment]


    static constraints = {
        fullName nullable: false, blank: false
        photo nullable: true
        email nullable: true, email:true
    }
    static mapping = {
        cache true
    }
}
