namespace XYZHotels.ExceptionHandle
{
    public class NoEntriesAvailable : Exception
    {
        string message;
        public NoEntriesAvailable(string name) 
        {

            message = $"No  {name} is available";

        }
        public override string Message => message;
    }
}
