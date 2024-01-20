import { Injectable } from '@angular/core';
import { Customer } from '../interface/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor() { }

  customers:Customer[] = [
    {img:"../../assets/images/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-101",
    costOfTicket:40,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
    {img:"../../assets/images/happy-arab-woman-hijab-portrait-smiling-girl-posing-red-studio-background-young-emotional-woman-human-emotions-facial-expression-concept-front-view.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-102",
    costOfTicket:30,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
    {img:"../../assets/images/portrait-happy-male-with-broad-smile.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-103",
    costOfTicket:20,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
   
    {img:"../../assets/images/ethan-hoover-0YHIlxeCuhg-unsplash.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-104",
    costOfTicket:80,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
    {img:"../../assets/images/jonas-kakaroto-mjRwhvqEC0U-unsplash.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-105",
    costOfTicket:90,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
    {img:"../../assets/images/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-106",
    costOfTicket:10,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },

    {img:"../../assets/images/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-107",
    costOfTicket:70,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },
    {img:"../../assets/images/happy-arab-woman-hijab-portrait-smiling-girl-posing-red-studio-background-young-emotional-woman-human-emotions-facial-expression-concept-front-view.jpg",
      
    phoneNumber:"01222668554",
    ticketNumber:"C-108",
    costOfTicket:50,
    location:"سينما مصر , مول العرب , برج الاطنان , سرايا القبة , صيدناوي مول , برج العرب" ,
    numberOfPeaple:1,
    numberOfBuying:"مرة واحدة",
    nameOfTicket:"pdf.45 تزكرة رقم ",
    sizeOfFile:"9mb",
    typeOfFile:"PDF",
    name:"أحمد محمود"
    },

   

  
  
 
  ]
}
