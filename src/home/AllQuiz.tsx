import { Card } from '@/components/ui/card';
import { useGetAllQuizsQuery } from '@/redux/api/quizApi'
import { setQuiz } from '@/redux/features/quizSlice';
import { useDispatch } from 'react-redux';


export default function AllQuiz() {
    const { data, isLoading } = useGetAllQuizsQuery(undefined);
    const dispatch = useDispatch();
    const handleSetQuiz = (quiz) => {
        dispatch(setQuiz(quiz.questions))
    }
    console.log({ data, isLoading })
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div>
            <section className='grid grid-cols-6 gap-4'>
                {data?.map(quiz => <Card onClick={() => handleSetQuiz(quiz)} key={quiz._id}><p className='text-center cursor-pointer'>{quiz.title}</p></Card>)}
            </section>
        </div>
    )
}
