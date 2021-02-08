class ScoreSerializer < ActiveModel::Serializer
  attributes :level, :platforms_used, :time_in_seconds, :user
  def user
    { name: self.object.user.name,
      initials: self.object.user.initials }
  end 
end
