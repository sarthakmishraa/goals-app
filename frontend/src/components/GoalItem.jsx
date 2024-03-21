// GoalItem.jsx

import { useDispatch } from "react-redux"
import { deleteGoal } from '../features/goals/goalSlice'

function GoalItem({goal}) {
    const dispatch = useDispatch()
    return (
        <div className="goal">
            <div>
                {new Date(goal.createdAt).toLocaleString('en-us')}
            </div>
            <h2>{goal.text}</h2>
            <button onClick={() => dispatch(deleteGoal(goal._id))} className="close">Delete</button>
        </div>
    )
}

export default GoalItem