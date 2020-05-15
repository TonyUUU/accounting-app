package model;

import java.time.LocalDate;

public class AccountEntry {
    private Long id;
    private LocalDate date;
    private String entryName;
    private double amount;

    public AccountEntry(Long id, LocalDate date, String entryName, double amount) {
        this.id = id;
        this.date = date;
        this.entryName = entryName;
        this.amount = amount;
    }
}
