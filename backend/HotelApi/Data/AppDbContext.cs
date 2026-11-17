using HotelApi.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelApi.Data;

public class AppDbContext : DbContext
{
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

    public DbSet<Room> Rooms => Set<Room>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Room>().HasData(
            new Room { Id = 1, Name = "Phòng Standard", Price = 800000, Guests = 2,
                Image = "https://picsum.photos/seed/hotel1/400/260",
                Description = "Phòng tiêu chuẩn, đầy đủ tiện nghi." },
            new Room { Id = 2, Name = "Phòng Deluxe", Price = 1200000, Guests = 3,
                Image = "https://picsum.photos/seed/hotel2/400/260",
                Description = "Không gian rộng rãi, view thành phố." },
            new Room { Id = 3, Name = "Phòng Family", Price = 1800000, Guests = 4,
                Image = "https://picsum.photos/seed/hotel3/400/260",
                Description = "Dành cho gia đình, 2 giường lớn." }
        );
    }
}