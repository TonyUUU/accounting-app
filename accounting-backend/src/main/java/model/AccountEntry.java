package model;

import java.time.LocalDate;

public class AccountEntry {
    private Long id;
    private LocalDate date;
    private String entryName;
    private double amount;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }

    public String getEntryName() {
        return entryName;
    }

    public void setEntryName(String entryName) {
        this.entryName = entryName;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public AccountEntry(Long id, LocalDate date, String entryName, double amount) {
        this.id = id;
        this.date = date;
        this.entryName = entryName;
        this.amount = amount;
    }
}
