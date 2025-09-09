import Question from "./home/Question"
import QuizSummery from "./home/QuizSummery";
import { useAppSelector } from "./redux/hook"


function App() {
  const { quizComplete } = useAppSelector((state) => state.quiz);
  return (
    <div>
      {!quizComplete ? <Question /> : <QuizSummery/>}
    </div>
  )
}

export default App
