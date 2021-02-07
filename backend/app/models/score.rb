class Score < ApplicationRecord
  belongs_to :user

  def self.get_high_scores
    # highscores logic here
    scores = { scores: "This should display highScores", status: 200 }
  end

end
