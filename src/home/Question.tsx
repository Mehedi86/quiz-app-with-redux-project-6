import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAppDispatch, useAppSelector } from '@/redux/hook'
import QuizControls from './QuizControls';
import { setAnswer } from '@/redux/features/quizSlice';

export default function Question() {
    const { questions, currentQuestionIndex, userAnswer } = useAppSelector((state) => state.quiz);
    const dispatch = useAppDispatch();
    const questionNumber = currentQuestionIndex + 1;
    const currentQuestion = questions[currentQuestionIndex];
    const currentAnswer = userAnswer[currentQuestionIndex]

    const handleAnswerChange = (ans: string) => {
        dispatch(
            setAnswer({
                questionIndex: currentQuestionIndex,
                answer: ans
            })
        )
        console.log("Selected:", ans)
    }

    return (
        <div className='flex justify-center mt-12'>
            <Card className='w-[450px]'>
                <CardHeader>
                    <h1 className='font-semibold text-2xl p-2 shadow w-1/2 mx-auto mt-4 mb-8 text-center'>Quiz: {questionNumber}/10</h1>
                    <CardTitle className='px-4'>{currentQuestion.question}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div>
                        {currentQuestion.options.map((option, index) =>
                            <Button
                                variant={currentAnswer === option ? 'default' : 'outline'}
                                onClick={() => handleAnswerChange(option)}
                                className='w-full mt-3'
                                size={"lg"}
                                key={index}>{option}
                            </Button>)}
                    </div>
                    <QuizControls />
                </CardContent>
            </Card>
        </div>
    )
}
