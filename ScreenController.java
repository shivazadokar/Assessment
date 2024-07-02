@RestController
@RequestMapping("/api/screens")
public class ScreenController {
    @Autowired
    private ScreenService screenService;

    @Autowired
    private SeatService seatService;

    @GetMapping
    public List<Screen> getAllScreens() {
        return screenService.getAllScreens();
    }

    @GetMapping("/{screenId}/seats")
    public List<Seat> getSeatsByScreenId(@PathVariable Long screenId) {
        return seatService.getSeatsByScreenId(screenId);
    }
}
