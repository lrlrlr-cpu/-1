# -1
用于存放互联网课程项目：前后端分离登录功能
1.前端：
   前端使用react 端口为3000 使用proxy解决跨域问题，主要文件在src中的App.js,使用axios进行post请求
   部署方式：进入项目文件夹后使用npm start
2.后端:
   使用JavaEE,用tomcat服务器部署(8080端口),主要逻辑文件是check.java(servlet文件)，当用户名不是lisi 密码不是12345时返回fail，否则返回successful
   部署方式:使用本机中的tomcat服务器运行项目（eclipse中完成）
