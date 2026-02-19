package org.timebank.protocol;

import java.util.List;
import java.util.Map;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.CrossOrigin;
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
@CrossOrigin(origins = {"http://localhost:5173"})
class TimebankController {
  @GetMapping("/health")
  public String health() {
    return "timebank-protocol-api:ok";
  }

  @GetMapping("/ledger/balances")
  public BalanceSnapshot balances() {
    Map<String, Double> balances = Map.of(
      "ana", -0.5,
      "luis", 1.0,
      "maria", -0.5,
      "diana", 2.5
    );

    List<Alert> alerts = List.of(
      new Alert("ana", "LOW_BALANCE", "Member near negative threshold"),
      new Alert("maria", "LOW_BALANCE", "Member near negative threshold")
    );

    return new BalanceSnapshot("pilot-neighborhood-01", -5, balances, alerts);
  }

  record Alert(String member, String code, String message) {}

  record BalanceSnapshot(String network, int maxNegativeHours, Map<String, Double> balances, List<Alert> alerts) {}
}
