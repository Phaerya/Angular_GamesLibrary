import { createFind } from "rxjs/internal/operators/find";
import { Game } from "./game";

export const GAMES: Game[] = [ //Games contient des Game de la classe game.ts
    {
        id: 1,
        name: "The Binding Of Isaac : Repentance",
        created: "4 Nov 2014",
        genre: ["Action", "Aventure", "RPG", "Rogue-Like"],
        picture: "https://th.bing.com/th/id/R.db8b99ddcbf09f14c8f19917e96a2328?rik=YSAwLfqr1yTJJQ&pid=ImgRaw&r=0"
    },
    {
        id: 2,
        name: "Half Life : 2",
        created: "16 Nov 2004",
        genre: ["Action", "Aventure", "FPS"],
        picture: "https://www.discoazul.fr/uploads/media/images/Halflife-2-031.jpg"
    },
    {
        id: 3,
        name: "Portal 2",
        created: "18 Avr 2011",
        genre: ["Action", "Aventure", "Puzzle"],
        picture: "https://store-images.s-microsoft.com/image/apps.4060.13510798882831474.b77b4919-b917-4f11-a29b-b56681714321.5b0d3213-7013-400c-b6dc-968ed0041757?mode=scale&q=90&h=300&w=300"
    },
    {
        id: 4,
        name: "Left 4 Dead 2",
        created: "17 Nov 2009",
        genre: ["Action", "Horreur", "FPS"],
        picture: "https://i1.sndcdn.com/artworks-000404450511-rxm16s-t500x500.jpg"
    },
    {
        id: 5,
        name: "Counter Strike: Source",
        created: "1 Nov 2004",
        genre: ["FPS", "Competitif", "Coop"],
        picture: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5b3fa1eb-bc7f-42a5-a6eb-ce977f3612f4/d1mfdyl-d50ce8b2-b548-4f41-b3e6-b47b3d220653.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzViM2ZhMWViLWJjN2YtNDJhNS1hNmViLWNlOTc3ZjM2MTJmNFwvZDFtZmR5bC1kNTBjZThiMi1iNTQ4LTRmNDEtYjNlNi1iNDdiM2QyMjA2NTMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.nGK4Tn-_G-I3h9EiOF_4Qxzq7ptrh4Ql6z-kifrAfJI"
    },
    {
        id: 6,
        name: "Team Fortress 2",
        created: "10 Oct 2007",
        genre: ["FPS", "Competitif", "Coop", "Cartoon"],
        picture: "https://www.gamespot.com/a/uploads/scale_medium/1197/11970954/2435558-2217932-box_tf2.png"
    }
]