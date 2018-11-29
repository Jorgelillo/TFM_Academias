package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.boot.web.server.ErrorPage;
//import org.springframework.boot.web.server.WebServerFactoryCustomizer;
//import org.springframework.boot.web.servlet.server.ConfigurableServletWebServerFactory;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpStatus;
//import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
//import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AcademiaBackApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcademiaBackApplication.class, args);
	}
	
//	@Configuration
//	public class WebApplicationConfig implements WebMvcConfigurer {
//
//	@Override
//	public void addViewControllers(ViewControllerRegistry registry) {
//	    registry.addViewController("/notFound").setViewName("index.html");
//	    registry.addViewController("/docente/detalles/2").setViewName("index.html");
//	    registry.addViewController("/aula/**/**").setViewName("index.html");
//	    registry.addViewController("/materia/**").setViewName("index.html");
//	    registry.addViewController("/estudiante/detalles/**").setViewName("index.html");
//	}
//
//
//	@Bean
//	public WebServerFactoryCustomizer<ConfigurableServletWebServerFactory> containerCustomizer() {
//	    return container -> {
//	        container.addErrorPages(new ErrorPage(HttpStatus.NOT_FOUND,
//	                "/notFound"));
//	    };
//	  }
//
//	}
	
}
