<!-- #include file="function.asp" -->
<!-- #include file="code.asp" -->
<!-- #include file="md5.asp" --><%
myfilename="reply.asp"
username=Request.Cookies("username")
userpass=Request.Cookies("userpass")
upid=int(Request("upid"))
thisttime=Now()
dim listid, topictype, orderu
if action="reply" and Request.ServerVariables("request_method") = "POST" then
if Request.Cookies("posttime")<>empty then
if DateDiff("s",Request.Cookies("posttime"),Now()) < int(PostTime) then error("��̳����һ�����η������"&PostTime&"�룡")
end if
set rs=server.createobject("ADODB.Recordset")
if username=empty or username=empty then 
username=HTMLEncode(Trim(Request.Form("username")))
userpass=md5(Trim(Request.Form("userpass")))
If conn.Execute("Select id From [user] where username='"&username&"' and userpass='"&userpass&"' " ).eof Then error("����д���û��������������")
Response.Cookies("username")=username
Response.Cookies("userpass")=userpass
end if
icon=Request("icon")
txttitle=HTMLEncode(Trim(Request.Form("txttitle")))
content=ContentEncode(RTrim(Request.Form("content")))
if Len(txttitle)<3 then error("���±��ⲻ��С�� 3 �ַ�")
if Len(content)>contentlen then error("����̫��,���ܳ���"&contentlen&"�ֽ�")
if Len(content)<3 then error("<�������ݲ���С�� 3 �ַ�")
if badwords<>empty then
filtrate=split(badwords,"|")
for i = 0 to ubound(filtrate)
txttitle=ReplaceText(txttitle,""&filtrate(i)&"",string(len(filtrate(i)),"*"))
content=ReplaceText(content,""&filtrate(i)&"",string(len(filtrate(i)),"*"))
next
end if
'''''''''''''''''''''''''''''''''''
sql="select * from [user] where username='"&HTMLEncode(username)&"'"
rs.Open sql,Conn,1,3
rs("posttopic")=rs("posttopic")+1
rs.update
userface=rs("userface")
rs.close
'''''''''''''''''''''''''''''''''''''''''''''''
sql="select * from [list] where id=" & upid & " or upid=" & upid
	rs.Open sql,Conn,1,1
	If rs.recordcount=0 Then
		error "�����ڴ���,������ѱ�ɾ��"
		Response.End
	End If
rs.movelast
orderu=rs("orderu")
If rs("id")<>upid Then
	orderu=addnum(orderu)
else
	orderu=newnum(orderu)
End If
topictype=rs("topictype")
rs.close
'''''''''''''''''
sql="select * from [list] where id="&upid
rs.Open sql,Conn,1,3
rs("ifchild")=rs("ifchild")+1
rs("allre")=rs("allre")+1
rs.update
allre=rs("allre")
rrtoptopic=rs("toptopic")
rs.close
sql="SELECT * FROM [list]"
rs.Open sql,conn,1,3
rs.Addnew
rs("upid")=upid
rs("allre")=allre
rs("topictype")=topictype
rs("orderu")=orderu
rs("username")=username
rs("icon")=icon
rs("txttitle")=txttitle
rs("posttime")=thisttime
rs.Update
listid=rs("id")
rs.Close
sql="SELECT * FROM forum"
rs.Open sql,conn,1,3
rs.Addnew
rs("listid")=listid
rs("content")=content
rs.Update
rs.Close
sql="update list set toptopic="&rrtoptopic&",lasttime='" & thisttime & "',allre=" & allre & " where topictype=" & topictype
conn.execute(sql)
Set rs=Nothing
htmlfilename=listid
content = ubb(content)
set fileobject = Server.CreateObject("Scripting.FileSystemObject")
TempletTopPath=Server.MapPath("templet\top.html")
TempletBottomPath=Server.MapPath("templet\bottom.html")
set TOPTEMP=fileobject.openTextFile(TempletTopPath,,True)
set BOTTOMTEMP=fileobject.openTextFile(TempletBottomPath,,True)
topt=TOPTEMP.ReadAll 
bottomt=BOTTOMTEMP.ReadAll
qqwmcopayout=""
topt=replace(topt,"<#title#>", txttitle)
topt=replace(topt,"<#username#>", username)
topt=replace(topt,"<#userface#>", userface)
bottomt=replace(bottomt,"<#posttime#>", thisttime)
set addhtmlfile = fileobject.CreateTextFile(Server.MapPath(".")&"\html\"&upid&"\"&htmlfilename&wmhtmlkzn)
addhtmlfile.writeline topt
addhtmlfile.writeline("<table width='100%' border='0' cellspacing='0' cellpadding='0'>")
addhtmlfile.writeline("<tr><td height='28' align='right'><a href=../../>������ҳ</a> | �Ķ� <font color=red><script src=../../count.asp?id="&listid&"></script></font> �� | <a href=../../reply.asp?upid="&upid&">�ظ�����</a> | <a href=../../modify.asp?id="&listid&">���߱༭</a> | <a href=javascript:location.reload()>ˢ������</a> | <a href=javascript:window.close()>�رձ�ҳ</a></td></tr>")
addhtmlfile.writeline("<tr><td valign=top style=font-size:14px>"&content&"</td></tr>")
addhtmlfile.writeline("<tr><td id=contentads></td></tr>")
addhtmlfile.writeline("</table>")
addhtmlfile.writeline bottomt
Response.Cookies("posttime")=now
message="<li>�����ⷢ���ɹ�<li><a href=./>������̳��ҳ</a>"
succeed(""&message&"<meta http-equiv=refresh content=3;url=html/"&upid&"/"&htmlfilename&wmhtmlkzn&">")
Response.End
end if
%>
<html>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
<title><%=forumname%> - �ظ�����</title>
<link href="images/css.css" rel="stylesheet" type="text/css">
</head>

<body>

<script>
function storeCaret(textEl) {if (textEl.createTextRange) textEl.caretPos = document.selection.createRange().duplicate();}
function HighlightAll(theField) {
var tempval=eval("document."+theField)
tempval.focus()
tempval.select()
therange=tempval.createTextRange()
therange.execCommand("Copy")}
function DoTitle(addTitle) {
var revisedTitle;var currentTitle = document.FORM.intopictitle.value;revisedTitle = addTitle+currentTitle;document.FORM.intopictitle.value=revisedTitle;document.FORM.intopictitle.focus();
return;}
</script>
<form name="FORM" action="<%=myfilename%>" method="post" onsubmit="if(this.name.value==''){alert('����д�û���');return false}else{if(this.pass.value==''){alert('����д����');return false}else{if(this.txttitle.value==''){alert('����д����');return false}else{if(this.content.value==''){alert('����������');return false}}}}">
	<input type="hidden" name="action" value="reply">
	<input type="hidden" name="upid" value="<%=upid%>">
	<table border="0" width="80%" cellspacing="1" cellpadding="3" bgcolor="#C0C0C0" align="center">
		<tr>
			<td bgcolor="#FFFFFF" align="right">���±��⣺</td>
			<td bgcolor="#FFFFFF" colspan="2">
			<input maxlength="100" size="60" name="txttitle"></td>
		</tr>
		<%
if Request.Cookies("username")=empty or Request.Cookies("userpass")=empty then
%>
		<tr>
			<td bgcolor="#FFFFFF" align="right">�û���½��</td>
			<td bgcolor="#FFFFFF" colspan="2">
			�û�����<input maxlength="24" name="username" value="<%=username%>">
			���룺<input type="password" maxlength="20" name="userpass" value="<%=userpass%>"> 
			<font color="#FF0000">*ֱ�������û��������뼴��</font></td>
		</tr>
		<%
end if
%>
		<tr>
			<td bgcolor="#FFFFFF" align="right" valign="top">UBB��ǩ˵����<br>
			<font color="#FF0000">(ֱ�Ӹ���<br>
			��ǩ���뷢��)</font></td>
			<td bgcolor="#FFFFFF">[b]�Ӵ�[/b]<br>
			[i]��б[/i]<br>
			[u]�»���[/u]<br>
			[strike]ɾ����[/strike]<br>
			[align=center]����[/align]<br>
			[align=left]����[/align]<br>
			[align=right]����[/align]<br>
			[fly]�����ƶ�[/fly]<br>
			[move]������[/move]<br>
			[color=��ɫ����]������ɫ[/color]</td>
			<td bgcolor="#FFFFFF">[bgcolor=��ɫ����]���屳����ɫ[/bgcolor]<br>
			[size=1��7]]�ֺŴ�С[/size]<br>
			[img]����ͼƬ[/img]<br>
			[url=������ַ]����˵��[/url]<br>
			[sound]���뱳������[/sound]<br>
			[ra]mp3��ַ���ǵ�̨��ַ[/ra]<br>
			[flash=����,�߶�]flv����flash��ַ[/flash]<br>
			[iframe=����,�߶�]������ҳ��ַ[/iframe]<br>
			[mp=����,�߶�]media��Ƶ��ַ[/mp]<br>
			[RM=����,�߶�]raplay��Ƶ��ַ[/rm]</td>
		</tr>
		<tr>
			<td bgcolor="#FFFFFF" align="right" valign="top">�������ݣ�</td>
			<td bgcolor="#FFFFFF" colspan="2">
			<textarea name="content" rows="15" cols="75" onselect="storeCaret(this);" onclick="storeCaret(this);" onkeyup="storeCaret(this);"></textarea></td>
		</tr>
		<tr>
			<td bgcolor="#FFFFFF" colspan="3" align="center">
			<input type="submit" value="�� ��" name="button">
			<input type="reset" name="Submit" value="�� ��"></td>
		</tr>
	</table>
</form>

</body>

</html>
<%
Function NewNum(num1)
	NewNum=num1
	If Instr(1,num1,".")=0 then
		NewNum=NewNum & "."
	End If
	NewNum=NewNum & "01"
End Function
Function AddNum(num1)
	Dim num
	num=Right(num1,2)*1
	num=num+1
	num=Left(num1,Len(num1)-1) & num
	AddNum=num	
End Function

%>