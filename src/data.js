import { v4 as uuidv4 } from "uuid";

function chillHope() {
    return[
        {
            name: "Early June",
            artist: "lloom",
            cover:"https://cms.chillhop.com/media/79293/squarele8ade07103d3d6d04fad3a0d1d6c668df8295115.jpg",
            color: ["#DFB07E","#9EA77A"],
            id: uuidv4(),
            active: true,
            audio: "https://stream.chillhop.com/mp3/79272",
        },
        {
            name: "You Bring Me Life",
            artist: "Psalm Trees",
            cover:"https://cms.chillhop.com/media/78386/squarel3972705ce001635ac9937ef96eb37d043c76ba8a.jpg",
            color: ["#CF856D","#402C36"],
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/75544",
        },
        {
            name: "I Don't Want Love",
            artist: "Psalm Trees, ALEXANDER",
            cover:"https://cms.chillhop.com/media/78390/squarel42ad4f687c9d609b3a3179a5bddba75881010335.jpg",
            color: ["#CEBD6C","#7F6797"],
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/74864",
        },
        {
            name: "Guitar Shop",
            artist: "mommy, Sleepy Fish",
            cover:"https://cms.chillhop.com/media/79294/squarelf07bfabdf12ba041dfaf3e2493a12e53cee0b2d1.jpg",
            color: ["#E15E93","#322966"],
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/77527",
        },
        {
            name: "Hope It's Not",
            artist: "J.Folk",
            cover:"https://cms.chillhop.com/media/79291/squarel4416fe0abb0ce765cb58be4812a4ee0578ad794f.jpg",
            color: ["#D35CE1","#8EDEF5"],
            id: uuidv4(),
            active: false,
            audio: "https://stream.chillhop.com/mp3/77541",
        },
    ];
}

export default chillHope;