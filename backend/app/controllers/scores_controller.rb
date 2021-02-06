class ScoresController < ApplicationController

    def index
      scores = Score.all
      render json: scores
    end

    def show
      user = Score.find_by_id(params[:id])
      render json: score
    end

    def create
      score = Score.create(user_params)
      if score.save
        render json: score
      else
        render json: { }
    end

    def destroy
      score = Score.find_by_id(params[:id])
      score.destroy
      render json: score
    end

    private

    def user_params
      params.require(:score).permit(:user_id, :level, :platforms_used, :time_in_seconds)
    end

end
