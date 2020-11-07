import { DefaultQuestionType, ModifyQuestionType } from '../Types/Type';
import { Shuffle } from '../Utility/Utilities';

export const getQuestions = async (QuestionNo: number, Level: string): Promise<ModifyQuestionType[]> => {
    let response = await fetch(`https://opentdb.com/api.php?amount=${QuestionNo}&difficulty=${Level}&type=multiple`);
    let { results } = await response.json();
    let QuestionData: ModifyQuestionType[] = results.map((quiz: DefaultQuestionType) => {
        return {
            question: quiz.question,
            answer: quiz.correct_answer,
            options: Shuffle(quiz.incorrect_answers.concat(quiz.correct_answer)),
        };
    });
    return QuestionData;
};