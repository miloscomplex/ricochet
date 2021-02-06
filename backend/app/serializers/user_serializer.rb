class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :initials, :scores 
end
