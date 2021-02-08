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
        render json: { errors: user.errors }, status: 422
      end
    end

    def highscores
      highscores = Score.get_high_scores
      render json: highscores
    end

    def destroy
      score = Score.find_by_id(params[:id])
      score.destroy
      render json: score
    end

    private

    def score_params
      params.require(:score).permit(:user_id, :level, :platforms_used, :time_in_seconds)
    end

    def user_params
      params.require(:user).permit(:name, :initials)
    end

end
