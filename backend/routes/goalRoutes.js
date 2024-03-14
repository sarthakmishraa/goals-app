// goalRoutes.js

const express = require('express')
const router = express.Router()
const { getGoals, setGoal, updateGoal, deleteGoal } = require('../controllers/goalController')
const { protect } = require('../middleware/authMiddleware')

// As the routes are same we can use router.route() method for those requests

// For get and post requests

// // one way
// router.get('/', getGoals)
// router.post('/', setGoal)

// // second way
// router.route('/').get(getGoals).post(setGoal)

// For update/put and delete requests

// // one way
// router.put('/:id', updateGoal)
// router.delete('/:id', deleteGoal)

// // second way
// router.route('/:id').put(updateGoal).delete(deleteGoal)

router.route('/').get(protect, getGoals).post(protect, setGoal)
router.route('/:id').put(protect, updateGoal).delete(protect, deleteGoal)

module.exports = router