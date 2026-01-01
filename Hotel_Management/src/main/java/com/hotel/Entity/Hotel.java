package com.hotel.Entity;



import jakarta.persistence.*;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "hotels")
@EntityListeners(AuditingEntityListener.class)
@Data @NoArgsConstructor @AllArgsConstructor
@Builder
public class Hotel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 100)
    private String name;

    @Column(length = 200)
    private String location;

    @Column(name = "total_rooms")
    private Integer totalRooms;

    @Column(length = 20)
    private String starRating;

    @LastModifiedDate
    @Column(name = "updatedAt")
    private LocalDate updatedAt;

    @CreatedDate
    @Column(name = "createdAt", updatable = false)
    private LocalDate createdAt;

    @LastModifiedBy
    @Column(name = "updatedBy")
    private String uploadedBy;

    @CreatedBy
    @Column(name = "createdBy", updatable = false)
    private String createdBy;

    @Version
    @Column(name = "VERSION")
    private Long version;

    @OneToMany(mappedBy = "hotel", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Room> rooms;
}
