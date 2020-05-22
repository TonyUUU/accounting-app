package api;

import model.AccountEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
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

    @GetMapping("/entries/{id}")
    public AccountEntry getEntry(@PathVariable long id) {
        return entryService.findById(id);
    }

    @DeleteMapping("/entries/{id}")
    public ResponseEntity<Void> deleteEntry(@PathVariable long id) {
        AccountEntry entry = entryService.deleteById(id);
        if (entry != null) {
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
