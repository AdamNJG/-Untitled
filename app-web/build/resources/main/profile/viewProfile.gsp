<html>
<head>
	<meta name="layout" content="main"/>
</head>
<body>
<g:if test="${flash.message}">
<div class="messageContainer">
  <div style="display: block">${flash.message}</div>
  </div>
</g:if>
<div class="profileUser">
<sec:loggedInUserInfo field="username" var="username"/>'s profile
</div><br/>

<div class="profileContainer">
<div>
Name: ${profile?.fullName}
</div><p/>
<div>
Email: ${profile?.email}
</div><br/>
<div>
<g:link class="button" action="editProfile">Edit profile</g:link>
</div>
</div>
<div class="ppcontainer">
<sec:loggedInUserInfo field="username" var="username"/>'s posts
    <div class="PostContainer">
        <g:each in="${profile.posts}" var="post">
            <div>
            <div class="postUser">
                ${post.profile.user.username}
                </div>
                <div class="postInnerContainer">
                    ${post.content}
                </div>
                <div class="postDate">
                    ${post.dateCreated}
                </div>
            </div>
        </g:each>
    </div>
</div>
</body>
</html>