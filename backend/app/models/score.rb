class Score < ApplicationRecord
  belongs_to :user

  validates :time_in_seconds, :platforms_used, :level, presence: true
  validates :initials, length: { minimum: 2, maximum: 4}
  validates :platforms_used, numericality: { only_integer: true, greater_than_or_equal_to: 1 }
  validates :time_in_seconds, numericality: { only_integer: true, greater_than: 1 }

  def self.get_high_scores
    # highscores logic here
    scores = { scores: "This should display highScores", status: 200 }
  end

end
