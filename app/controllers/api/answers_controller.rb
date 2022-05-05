class Api::AnswersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def index
      @answers = Answer.all
      render 'api/answers/index'
    end
  
    def create
      @answer = Answer.new(answers_params)
      debugger;
      @answer.author_id = current_user.id
      debugger;
      if @answer.save
        render 'api/answers/show'
      else
        render json: @answer.errors.full_messages, status: 422
      end
    end
  
    def update
      @answer = Answer.find_by(id: params[:id])
      if @answer.author_id != current_user.id
        render json: ['You are not the author of this'], status: 422
      elsif (@answer.update(answers_params))
        render 'api/answers/show'
      else
        render json: @answer.errors.full_messages, status: 422
      end
    end
  
    def destroy
      @answer = Answer.find_by(id: params[:id])
      @answer.destroy;
      render 'api/answers/show'
    end
  
    def show
      @answer = Answer.find_by(id: params[:id])
      if @answer
        render 'api/answers/show'
      else
        render json: ['The item you are looking for does not exist'], status: 404;
      end
    end
  
    private
    def answers_params
      params.require(:answer).permit(:body, :num_likes, :question_id, :author_id)
    end
  
  end