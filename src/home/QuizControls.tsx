import { Button } from '@/components/ui/button'
import { changeComplete, nextQuestion, previousQuestion } from '@/redux/features/quizSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hook'


export default function QuizControls() {
    const dispatch = useAppDispatch();
    const { questions, currentQuestionIndex, userAnswer } = useAppSelector((state) => state.quiz);
    const isAnswerSelected = userAnswer[currentQuestionIndex] !== null;
    const prevBtn = currentQuestionIndex === 0; 
    
    const handleNextQuestion = () => {
        if (isAnswerSelected) {
            dispatch(nextQuestion());
        }
    }
    const handlePrevQuetion = () => {
        dispatch(previousQuestion());
    }
    const handleChangeComplete = () => {
        if (currentQuestionIndex === questions.length - 1) {
            dispatch(changeComplete())
        }
    }
    return (
        <div className='flex justify-between mt-4 space-x-4'>
            <Button disabled={prevBtn} onClick={handlePrevQuetion}>Previous</Button>
            {currentQuestionIndex === questions.length - 1 ? <Button onClick={handleChangeComplete}>Complete Quiz</Button> : <Button disabled={!isAnswerSelected} onClick={handleNextQuestion}>Next</Button>}


        </div>
    )
}
