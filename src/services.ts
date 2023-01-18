
interface Services {
    title: string;
    id: string;
    categories: {
        title?: string;
        service: {
            name: string;
            price: string;
            options?: string[];
        }[]
    }[];
}

export const services: Services[] = [
    {
        title: "All about the hair",
        id: "hair",
        categories: [
            {
                title: "Cutting",
                service: [
                    {
                        name: "Cut and Blow Dry",
                        price: "£33",
                    },
                    {
                        name: "Re-Style and Blow Dry",
                        price: "£38",
                    },
                    {
                        name: "Ladies Wet/Dry Cut",
                        price: "£17",
                    },
                    {
                        name: "Mens Cut",
                        price: "£12",
                    },
                    {
                        name: "Child's Wet/Dry Cut",
                        price: "£10",
                    },
                ]
            },
            {
                title: "Blow Drys and Styling",
                service: [
                    {
                        name: "Wash and Blow Dry",
                        price: "£17",
                    },
                    {
                        name: "Add Waves/Curls to Your Service",
                        price: "£7",
                    },
                    {
                        name: "Straightening",
                        price: "£10",
                    },
                    {
                        name: "GHD Curls/Waves",
                        price: "£15",
                    },
                    {
                        name: "Heated Rollers",
                        price: "£20",
                    },
                    {
                        name: "Hair Ups",
                        price: "From £25",
                    },
                ]
            },
            {
                title: "Colouring",
                service: [
                    {
                        name: "Root Application",
                        price: "£33",
                    },
                    {
                        name: "Full Head Tint",
                        price: "£43",
                    },
                    {
                        name: "T-Section",
                        price: "£36",
                    },
                    {
                        name: "Half Head Foils",
                        price: "£45",
                    },
                    {
                        name: "Full Head Foils",
                        price: "£58",
                    },
                    {
                        name: "Balayage/Ombre",
                        price: "P.O.A",
                    },
                    {
                        name: "Add a Cut and Blow Dry",
                        price: "£25",
                    },
                    {
                        name: "Toner",
                        price: "£10",
                    },
                ]
            },
        ]
    },
    {
        title: "Nailed it",
        id: "nails",
        categories: [
            {
                title: "Gel Nails",
                service: [
                    {
                        name: "Gel Fingers",
                        price: "£17",
                    },
                    {
                        name: "Gel Toes",
                        price: "£15",
                    },
                    {
                        name: "Gel Fingers and Toes",
                        price: "£30",
                    },
                    {
                        name: "Gel Soak Off and New Set",
                        price: "£20",
                    },
                    {
                        name: "Gel Soak Off, File and Buff",
                        price: "£5",
                    },
                    {
                        name: "Hard Gel Overlay",
                        price: "£22",
                    },
                ]
            },
            {
                title: "Acrylics",
                service: [
                    {
                        name: "Full Set of Acrylic and Gel Polish",
                        price: "£32",
                    },
                    {
                        name: "Acrylic Infill and Gel Polish",
                        price: "£25",
                    },
                    {
                        name: "Full Set of Acrylic With Design",
                        price: "From £35",
                    },
                    {
                        name: "Acrylic Overlay and Gel Polish",
                        price: "£28",
                    },
                    {
                        name: "French, Pink and White Ombre",
                        price: "£35",
                    },
                    {
                        name: "Soak Off with a New Set",
                        price: "£7",
                    },
                    {
                        name: "Soak Off File and buff",
                        price: "£10",
                    },
                ]
            }
        ]
    },
    {
        title: "Everything Beauty",
        id: "beauty",
        categories: [
            {
                title: "Waxing and Tinting",
                service: [
                    {
                        name: "Eyebrow Wax",
                        price: "£8",
                    },
                    {
                        name: "Eyebrow Tint",
                        price: "£10",
                    },
                    {
                        name: "Eyebrow Wax and Tint",
                        price: "£15",
                    },
                    {
                        name: "Eyelash Tint",
                        price: "£12",
                    },
                    {
                        name: "Lip or Chin Wax",
                        price: "£5",
                    },
                    {
                        name: "Underarm Wax",
                        price: "£8",
                    },
                    {
                        name: "Forearm Wax",
                        price: "£10",
                    },
                    {
                        name: "Full Leg Wax",
                        price: "£25",
                    },
                    {
                        name: "1/2 Leg Wax",
                        price: "£17",
                    },
                ]
            },
            {
                title: "Lashes and Brows",
                service: [
                    {
                        name: "Eyebrow Lamination, Tint & Wax",
                        price: "£30",
                    },
                    {
                        name: "Lash Lift & Tint",
                        price: "£30",
                    },
                ]
            },
        ]
    },
    {
        title: "Love your Body",
        id: "body",
        categories: [
            {
                title: "Full Body",
                service: [
                    {
                        name: "Full Body Massage",
                        price: "£35",
                        options: [
                            "Aromatherapy - With Pre-Blended Oils for Total Relaxation",
                            "Swedish - A Deeper Massage for the Aches and Pains",
                            "Hot Stones - Adding Heat to Relieve Muscle Tension",
                        ],
                    },
                    {
                        name: "Add Face and Scalp",
                        price: "£5",
                    },
                ]
            },
            {
                title: "Back, Neck & Shoulders",
                service: [
                    {
                        name: "Back, Neck & Shoulders Massage",
                        price: "£25",
                        options: [
                            "Aromatherapy - With Pre-Blended Oils for Total Relaxation",
                            "Swedish - A Deeper Massage for the Aches and Pains",
                            "Hot Stones - Adding Heat to Relieve Muscle Tension",
                        ],
                    },
                    {
                        name: "Add Face and Scalp",
                        price: "£5",
                    },
                ]
            },
        ]
    },
    // {
    //     title: "Mens Groom Room",
    //     description: "Lorem ipsum dolor sit amet consectetur. Vel volutpat quam platea elementum velit est amet eget arcu.",
    //     categories: [
    //         {
    //             service: [
    //                 {
    //                     name: "Gents Cut",
    //                     price: "£12",
    //                 },
    //                 {
    //                     name: "Back, Neck & Shoulder Massage (30 mins)",
    //                     price: "£25",
    //                 },
    //                 {
    //                     name: "Back Wax",
    //                     price: "£25",
    //                 },
    //                 {
    //                     name: "Chest Wax",
    //                     price: "£20",
    //                 },
    //                 {
    //                     name: "Nasal/Ear Wax",
    //                     price: "£5",
    //                 },
    //                 {
    //                     name: "Eyebrow Wax",
    //                     price: "£6",
    //                 },
    //                 {
    //                     name: "Energising Facial",
    //                     price: "£30",
    //                 },
    //                 {
    //                     name: "Deep Cleanse Facial",
    //                     price: "£35",
    //                 },
    //                 {
    //                     name: "Deluxe Facial",
    //                     price: "£45",
    //                 },
    //             ]
    //         },
    //     ]
    // },
]