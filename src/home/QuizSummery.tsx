import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Progress } from '@/components/ui/progress'
import { useAppSelector } from "@/redux/hook"

// 1.calculate correct ans
// 2.calculate wrong ans
// 3.calculate percentage

export default function QuizSummery() {
    const { questions, userAnswer } = useAppSelector((state) => state.quiz)

    const correctAns = questions.reduce((count, question, inx) => {
        return question.correctAnswer === userAnswer[inx] ? count + 1 : count
    }, 0)

    const wrongAns = questions.length - correctAns;

    const percentage = parseFloat(((correctAns / questions.length) * 100).toFixed(2))

    const evaluation = (marks: number) => {
        if (marks > 30) {
            return "Good"
        }
        else if (marks > 50) {
            return "Better"
        }
        else if (marks > 80) {
            return "Excellent"
        }
    }
    return (
        <div>
            <h1 className='text-2xl font-semibold text-center mt-12'>Result</h1>
            <Card className='max-w-lg mx-auto mt-6'>
                <CardHeader>
                    <CardTitle className='font-bold'>Quiz Summery</CardTitle>
                </CardHeader>
                <CardContent>
                    <h3 className='mb-2 font-semibold'>You got: {correctAns} out of {questions.length}</h3>
                    {/* progress bar */}
                    <div>
                        <Progress value={33} className="w-full bg-rose-600 h-4" />
                        <div className='flex justify-between mt-2'>
                            <span>{percentage}%</span>
                            <span>Perfomance: Good</span>
                        </div>
                        <div className='py-2'>
                            <p>
                                <strong>Incorrect Answers:</strong> {wrongAns}
                            </p>
                        </div>
                        <div>
                            <p>
                                {evaluation(percentage)} Job: Keep Practising!
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
