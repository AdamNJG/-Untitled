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
<div class="editUser">
Editing: <sec:loggedInUserInfo field="username" var="username"/>'s profile
</div><br/>
<div class="editContainer">
        <g:form action="editCommit">
        Name: <g:textField id="nameChange" name="nameChange" value="${profile.fullName}" cols="50"/><br/>
        <g:submitButton class="postSubmit loginButton" name="edit" value="edit"/>
        </g:form>
</div>
</body>
</html>