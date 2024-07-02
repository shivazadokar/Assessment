
@Repository
public interface SeatRepository extends JpaRepository<Seat, Long> {
    // Custom query methods if needed
    List<Seat> findByScreenId(Long screenId);
}
