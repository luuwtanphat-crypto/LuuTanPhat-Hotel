using HotelApi.Data;
using HotelApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class RoomsController : ControllerBase
{
    private readonly AppDbContext _db;

    public RoomsController(AppDbContext db)
    {
        _db = db;
    }

    // GET: api/rooms
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Room>>> GetAll()
    {
        return await _db.Rooms.AsNoTracking().ToListAsync();
    }

    // GET: api/rooms/1
    [HttpGet("{id}")]
    public async Task<ActionResult<Room>> GetById(int id)
    {
        var room = await _db.Rooms.FindAsync(id);
        if (room is null) return NotFound();
        return room;
    }

    // POST: api/rooms
    [HttpPost]
    public async Task<ActionResult<Room>> Create(Room room)
    {
        room.Id = 0;
        _db.Rooms.Add(room);
        await _db.SaveChangesAsync();
        return CreatedAtAction(nameof(GetById), new { id = room.Id }, room);
    }

    // PUT: api/rooms/1
    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, Room room)
    {
        if (id != room.Id) return BadRequest("Id không khớp.");

        var existing = await _db.Rooms.FindAsync(id);
        if (existing is null) return NotFound();

        existing.Name = room.Name;
        existing.Price = room.Price;
        existing.Guests = room.Guests;
        existing.Image = room.Image;
        existing.Description = room.Description;

        await _db.SaveChangesAsync();
        return NoContent();
    }

    // DELETE: api/rooms/1
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        var room = await _db.Rooms.FindAsync(id);
        if (room is null) return NotFound();

        _db.Rooms.Remove(room);
        await _db.SaveChangesAsync();
        return NoContent();
    }
}