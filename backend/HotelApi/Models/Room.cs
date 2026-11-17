using System.ComponentModel.DataAnnotations;

namespace HotelApi.Models;

public class Room
{
    public int Id { get; set; }

    [Required, MaxLength(100)]
    public string Name { get; set; } = string.Empty;

    [Range(1, int.MaxValue)]
    public int Price { get; set; }

    [Range(1, 20)]
    public int Guests { get; set; }

    public string? Image { get; set; }
    public string? Description { get; set; }
}