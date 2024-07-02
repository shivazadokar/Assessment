
@Service
public class ScreenService {
    @Autowired
    private ScreenRepository screenRepository;

    @Autowired
    private SeatRepository seatRepository;

    public List<Screen> getAllScreens() {
        return screenRepository.findAll();
    }

    public List<Seat> getSeatsByScreenId(Long screenId) {
        return seatRepository.findByScreenId(screenId);
    }
}
