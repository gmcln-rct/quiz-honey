

const resultComments = [
    "You do know you were supposed to select the CORRECT answers, right?",
    "There are other careers than programming. Maybe try, say, being a cobbler?",
    "They say there are no dumb questions. However, there are dumb answers.",
    "Went to public school, huh?",
    "You have failed the badger.",
    "Not to damn you with faint praise, but... YOU BLEW IT.",
    "There is still time to sign up for that How To Be A Housesitter Bootcamp. Just FYI.",
    "With enough practice and study, you might not fail as horribly next time.",
    "At the Honey Badger Institute of Higher Learning, we value everyone's effort. Except when they answer like you just did.",
    "Socrates said 'The only true wisdom is in knowing you know nothing.' You appear to be very, very wise.",
    "Socrates said 'Education is the kindling of a flame, not the filling of a vessel.' Your answers lit the vessel on fire and sank it.",
];


function createResultComment() {
    let commentsLength = resultComments.length;

    function getRandomInt() {
        return Math.floor(Math.random() * commentsLength);
    }

    let randomNum = getRandomInt();

    let randomResultComment = resultComments(randomNum);

    return randomResultComment;
}

export const resultComment = createResultComment();

