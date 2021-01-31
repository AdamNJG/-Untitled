<body>

<h1>Welcome to the main feed, <sec:loggedInUserInfo field="username" var="username"/></h2>

<g:if test="${flash.message}">
<div class="messageContainer">
  <div style="display: block">${flash.message}</div>
  </div>
</g:if>
<p/>
<div>
<g:each var="post" in="${allPosts}">
    <p>Last Name: ${post.content}</p>
    <p>First Name: ${post.content}</p>
</g:each>
</div>
</body>
</html>