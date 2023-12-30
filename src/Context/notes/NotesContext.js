import { createContext } from 'react'

const NotesContext = createContext();

export default NotesContext;

// ye context api ka use krke apne aap ko context bana diya or hum isko sare components me import krdenge jisse ki sare components context bn jayenge

// ye basically sare components me likha jata hai lekin hum code readability ke liye idhr hi define kr diye hai or isko har jagah import krdenge




// Context API ek feature hai React ka jo aapko state aur functions ko multiple components ke beech share karne mein madad karta hai, bina prop drilling ke.

// Chaliye ek simple analogy se samjhe:

// Imagine kijiye aapke ghar mein ek drawing room hai, aur aap wahaan ek chhoti si table pe ek book rakhte hain. Aapka bacha jab padhai kar raha hota hai apne kamre mein, toh usko book ki zarurat hoti hai. Ab, agar aap har baar apne drawing room se book le kar bachay ke kamre tak jaate hain, toh ye thoda inconvenient ho jata hai.

// Context API ka istemal karte hue, aap ye book (data ya functions) ek common jagah par rakh sakte hain (context mein), aur aapke bacha (component) direct wahaan se book ko access kar sakta hai, bina aapko har baar chal kar le jaana padhe.

// Isi tarah se, Context API React mein ek central storage provide karta hai jahan aap apne state aur functions ko rakh sakte hain, aur fir aapke components uss context ko access kar sakte hain bina har baar props ke through pass karna padhe.

// Ye approach aapko apne application ko maintain karne mein madad karta hai, khaas kar jab aapke components ka hierarchy (structure) complex ho ya data ko multiple levels tak pass karna ho.