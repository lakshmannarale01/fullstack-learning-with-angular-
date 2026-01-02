namespace XYZHotels.ExceptionHandle
{
    public class RoomNotAvailableExceptions : Exception
    {
        public override string Message => "Rooms Are Alreaady occupied";
    }
}
