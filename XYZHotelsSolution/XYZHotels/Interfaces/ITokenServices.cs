namespace XYZHotels.Interfaces
{
    public interface ITokenServices
    {
        public string GenerateToken(string username, string role);
    }
}
