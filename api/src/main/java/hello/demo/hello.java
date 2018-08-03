package hello.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Controller;

@Controller
@EnableAutoConfiguration
public class hello {
    @RequestMapping("/")
    @ResponseBody
    String home() {
        return "hello world";
    }
    public static void main(String[] args) throws Exception{
        SpringApplication.run(SampleController.class,args);
    }
}
