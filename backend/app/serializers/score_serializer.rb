class ScoreSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :level, :platforms_used, :time_in_seconds
end