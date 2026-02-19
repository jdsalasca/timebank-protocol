package org.timebank.protocol;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
public class TimebankProtocolApplication {
  public static void main(String[] args) {
    SpringApplication.run(TimebankProtocolApplication.class, args);
  }
}

@RestController
@RequestMapping("/api")
class HealthController {
  @GetMapping("/health")
  public String health() {
    return "timebank-protocol-api:ok";
  }
}
