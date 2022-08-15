const asyncHandler = require('express-async-handler');

// @desc Get goals
// @routes GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'Get goals!'});
});

// @desc Set goal
// @routes SET api/goals
// @access private
const setGoal = asyncHandler(async (res, req) => {
  if(!req.body.text){
    res.status(400);
    throw new Error('Please add a text field');
  }

  res.status(200).json({ message: 'Set goal!'});
});

// @desc Update goal
// @routes PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (res, req) => {
  res.status(200).json({ message: `Update goal for ${req.params.id}!`});
});

// @desc delete goals
// @routes DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (res, req) => {
  res.status(200).json({ message: `Deleted goal for ${req.params.id}`});
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,

}