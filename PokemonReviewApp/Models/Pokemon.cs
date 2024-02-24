namespace PokemonReviewApp.Models
{
    public class Pokemon
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public DateTime BirthDate { get; set; }
        public ICollection<Review> Reviews { get; set; } = null!;
        public ICollection<PokemonOwner> PokemonOwners { get; set; } = null!;
        public ICollection<PokemonCategory> PokemonCategories { get; set; } = null!;
    }
}
