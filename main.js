const quoteDisplay = document.querySelector('#quote')
const button = document.querySelector('button')


const quotes = [
    'I can bring you in warm, or I can bring you in cold.',
    'I was hoping to be free for Life Day, maybe even get home to the family… but I guess that’s not going to happen this year.',
    'I will help you. I have spoken.',
    'I will initiate self-destruct.',
    'I’m a Mandalorian. Weapons are part of my religion.',
    'SOOGAA!',
    'This is the Way',
    'Dank Farrik!',
    'Would anyone care for some tea?',
    'You are a clan of two',
    'Come on, baby! Do the magic hand thing',
    'Wherever I go, he goes',
    'Give it to me now or I will peel it off your corpse',
    'I’ve been searching for you for many parsecs',
    'I know you’re good at killing',
    'I’ve never met a real Mandalorian. Heard stories, I know you’re good at killing. And probably none too happy to see me wearing this hardware',
    'You do not cover your face. You are not one of them.',
    'They already suffer under your rule. Surrender, or face the consequences. You have on day to decide.',
    'I’ve seen what such feelings can do a fully trained Jedi Knight.',
    'His attachment to you makes him vulnerable to his fears.',
    'Grogu and I can feel each other’s thoughts.'
    
]

function showQuote() {
    //your code
    let randomNumber = Math.floor(Math.random() * quotes.length)
    let randomQuote = quotes[randomNumber]
    quoteDisplay.innerHTML = randomQuote
}

button.addEventListener('click', showQuote)
