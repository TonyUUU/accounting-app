package com.personal.accountingbackend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = {"api", "service"})
public class AccountingBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(AccountingBackendApplication.class, args);
	}

}
