export interface Rooms{
    availablerooms: number;
    bookedrooms: number;
    totalrooms: number;
}

export interface RoomList{
    roomnumber: number;
    roomType: string;
    amenities: string;
    price: number;
    photo: string;
    checkIn: Date;
    checkOut: Date;
    rating : number;
}