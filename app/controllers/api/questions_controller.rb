class Api::QuestionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @questions = Question.all
    render 'api/questions/index'
  end

  def create
    @question = Question.new(questions_params)
    @question.author_id = 1
    if @question.save
      render 'api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def update
    @question = Question.find_by(id: params[:id])
    if @question.update(questions_params)
      render 'api/questions/show'
    else
      render json: @question.errors.full_messages, status: 422
    end
  end

  def destroy
    @question = Question.find_by(id: params[:id])
    @question.destroy;
    render 'api/questions/show'
  end

  def show
    @question = Question.find_by(id: params[:id])
    if @question
      render 'api/questions/show'
    else
      render json: ['The item you are looking for does not exist'];
    end
  end

  private
  def questions_params
    params.require(:question).permit(:title, :body, :num_likes)
  end

end