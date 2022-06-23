export interface Reservation {
    _id:             string;
    name:            string;
    phone:           string;
    numberOfPeople:  number;
    dateTime:        string;
    smoking:         boolean;
    specialRequests: string;
  
}
export interface Pasta {
    id:          number;
    name:        string;
    image:       string;
    category:    string;
    label:       string;
    price:       string;
    description: string;
    comments:    Comment[];
}

export interface Comment {
    id:      number;
    rating:  number;
    comment: string;
    author:  string;
    date:    Date;
}