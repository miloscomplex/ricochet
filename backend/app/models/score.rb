class Score < ApplicationRecord
  belongs_to :user

  validates :time_in_seconds, :platforms_used, :level, presence: true

  validates :platforms_used, numericality: { only_integer: true, greater_than_or_equal_to: 1 }

  validates :time_in_seconds, numericality: { only_integer: true, greater_than: 1 }

  def self.get_high_scores
    Score.order(:time_in_seconds, :platforms_used).limit(5)
  end

endget
