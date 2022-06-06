class Api::VotesController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @vote = Vote.new(votes_params)
        @vote.voter_id = current_user.id
        if @vote.save!
            render 'api/votes/show'
        else
            render json: @vote.errors.full_messages, status: 422
        end
    end

    def show
        @votes = Vote.where(votable_id: params[:id])
        render 'api/votes/index'
    end
    
    def destroy
        @vote = Vote.find_by(id:params[:id])
        @vote.destroy;
        render 'api/votes/show'
    end

    def index 
        @votes = Vote.find_by(votable_id: params[:id])
        render 'api/votes/index'
    end

    private
    def votes_params
        params.require(:vote).permit(:votable_id, :votable_type, :vote_type)
    end

end