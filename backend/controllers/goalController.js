const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel');

// @desc Get goals
// @routes GET api/goals
// @access private
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});

// @desc Set goal
// @routes SET api/goals
// @access private
const setGoal = asyncHandler(async (res, req) => {
  if(!req.body.text){
    res.status(400);
    throw new Error('Please add a text field');
  }
  const goal = await Goal.create({
    text: req.body.text,
  });
  res.status(200).json(goal);
});

// @desc Update goal
// @routes PUT api/goals/:id
// @access private
const updateGoal = asyncHandler(async (res, req) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal){
    res.status(400);
    throw new Error('Goal not found.');
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true
  } )
  res.status(200).json(updatedGoal);
});

// @desc delete goals
// @routes DELETE api/goals/:id
// @access private
const deleteGoal = asyncHandler(async (res, req) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal){
    res.status(400);
    throw new Error('Goal not found.');
  }

  await goal.remove(); 
  
  res.status(200).json({ id: req.params.id});
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,

}