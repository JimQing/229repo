package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@SpringBootApplication
public class MainApplication {
    private final String qqMapKey = "4IGBZ-QEHW3-ORE33-3HVCL-HE2NH-UMFF6";

	@RequestMapping("/getMapLatOrLng")
	public String getMapInfo(String address){
        http http = new http();
        String param = "address=" + address + "&key=" + this.qqMapKey;
        String result = http.sendGet("https://apis.map.qq.com/ws/geocoder/v1/", param);
		return result;
	}

	@RequestMapping("/getSuggestion")
	public String getSuggestion(String keyword, String region){
		http http = new http();
		String param = "keyword=" + keyword + "&region=" + region + "&key=" + this.qqMapKey;
		String result = http.sendGet("https://apis.map.qq.com/ws/place/v1/suggestion", param);
		return result;
	}

	@RequestMapping("/reverseLocal")
	public String reverseLocal(String location){
		http http = new http();
		String param = "key=" + this.qqMapKey + "&location=" + location;
		String result = http.sendGet("https://apis.map.qq.com/ws/geocoder/v1/", param);
		return result;
	}

//	获取前端参数的第二种方式 HttpServletRequest(前者只支持get,此方法可以支持post与get)
//	@RequestMapping("/getProductList")
//	public String getProductList(HttpServletRequest request){
//		http http = new http();
//		String keyword = request.getParameter("keyword");
//		String orderBy = request.getParameter("orderBy");
//		String pageNum = request.getParameter("pageNum");
//		String pageSize = request.getParameter("pageSize");
//		String param = "keyword=" + keyword + "&orderBy=" + orderBy + "&pageNum=" + pageNum + "&pageSize=" + pageSize;
//		String result = http.sendPost("http://www.happymmall.com/product/list.do", param);
//		return result;
//	}
	public static void main(String[] args) {
		SpringApplication.run(MainApplication.class, args);
	}
}
