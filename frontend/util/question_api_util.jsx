import React from 'react';
import { Route } from 'react-router-dom';
import QuestionIndex from '../components/questions/question_index';

export const fetchQuestions = () => {
  return $.ajax({
    method: 'get',
    url: '/api/questions'
  })
}

export const fetchQuestion = (questionId) => {
  return $.ajax({
    method:'get',
    url: `/api/questions/${questionId}`,   
  })
};

export const createQuestion = question => {
  return $.ajax({
    method: 'post',
    url: 'api/questions',
    data: {question: question}
  });
};

export const updateQuestion = question => {
  return $.ajax({
    method: 'patch',
    url: `api/questions/${question.id}`,
    data: {question: question}
  });
};

export const deleteQuestion = (questionId) =>{
  return $.ajax({
    method: 'delete',
    url: `api/questions/${questionId}`
  });
};