package service;

import module.AccountEntry;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountHardcodedService {
    private static List<AccountEntry> entries = new ArrayList<>();
    private static long idCounter = 0;

    static {
        entries.add(new AccountEntry(++idCounter,
                LocalDate.of(2020, 3, 12),
                "Breakfast", 10.2));
        entries.add(new AccountEntry(++idCounter,
                LocalDate.of(2020, 3, 12),
                "Bus Ticket", 2));
        entries.add(new AccountEntry(++idCounter,
                LocalDate.of(2020, 3, 15),
                "Grocery", 56.87));
        entries.add(new AccountEntry(++idCounter,
                LocalDate.of(2020, 3, 22),
                "KTV", 32.3));
    }

    public List<AccountEntry> findAll() {
        return entries;
    }
}
