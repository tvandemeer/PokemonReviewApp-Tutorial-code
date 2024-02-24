namespace PokemonReviewApp.Models
{
    public class Owner
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public string Gym { get; set; } = string.Empty;
        public Country Country { get; set; } = null!;
        public ICollection<PokemonOwner> PokemonOwners { get; set; } = null!;
    }
}
