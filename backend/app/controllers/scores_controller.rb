class ScoresController < ApplicationController

    def index
      scores = Score.all
      render json: scores
    end

    def show
      score = Score.find_by_id(params[:id])
      render json: score
    end

    def create
      user = User.find_or_create_by(user_params)
      score = user.scores.build(score_params)
      if user.valid? && score.save
        render json: score
      else
        render json: { error: "Couldn't create the score", status: 400 }
      end
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
