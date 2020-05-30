package api;

import model.AccountEntry;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import service.AccountHardcodedService;

import java.net.URI;
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

    @PutMapping("entries/{id}")
    public ResponseEntity<AccountEntry> updateEntry(@RequestBody AccountEntry entry) {
        AccountEntry updatedEntry = entryService.save(entry);

        return new ResponseEntity<>(updatedEntry, HttpStatus.OK);
    }

    @PostMapping("/entries")
    public  ResponseEntity<Void> createEntry(@RequestBody AccountEntry entry) {
        AccountEntry createdEntry = entryService.save(entry);

        URI uri = ServletUriComponentsBuilder
                    .fromCurrentRequest()
                    .path("/{id}").buildAndExpand(createdEntry.getId())
                    .toUri();

        return ResponseEntity.created(uri).build();
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
