package check;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class check
 */
public class check extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
request.setCharacterEncoding("UTF-8");
		
		String name = request.getParameter("username");
		String word = request.getParameter("password");
		System.out.println(name+"  "+word);
		if(name!=null && word!=null){
			System.out.println(name+"  "+word);
			//java代码只能返回一个json格式的字符串
			response.setContentType("text/html;charset=UTF-8");
			if(name.equals("lisi") && word.equals("12345")){
				response.getWriter().write("{\"label\":\"successful\"}");
			}
			else{
				response.getWriter().write("{\"label\":\"fail\"}");
			}	
		}	
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
