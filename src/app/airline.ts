
export class Airline{
    _id: string;
    name : string;
    imagePath : string;
    comments: [
        {
            _id : string;
            body: string;
            userEmail : String;
        }
    ]
    starRatings:[
        {
            _id : string;
            rating : number;
            userEmail : String;
        }
    ]
    starsCount : number;
}