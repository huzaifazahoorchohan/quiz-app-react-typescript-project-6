export type DefaultQuestionType = {
    category: string,
    correct_answer: string,
    difficulty: string,
    incorrect_answers: string[],
    question: string,
    type: string,
};

export type ModifyQuestionType = {
    question: string,
    answer: string,
    options: string[],
};

export type QuizCard = {
    question: string,
    options: string[],
};

export type cardProps = {
    question: string,
    options: string[]
    onnext: Function,
    num: number,
    queslength: number,

};