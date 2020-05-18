package api;

import model.AccountEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import service.AccountHardcodedService;

import java.util.List;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:4200" })
@RestController
public class AccountResource {
    @Autowired
    private AccountHardcodedService entryService;

    @GetMapping("/entries")
    public List<AccountEntry> getAllEntries() {
        return entryService.findAll();
    }
}
