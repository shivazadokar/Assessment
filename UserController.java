

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        userService.save(user);
        return ResponseEntity.ok("User registered successfully!");
    }

    // Login endpoint handled by Spring Security
}
