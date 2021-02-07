class User < ApplicationRecord
  has_many :scores, dependent: :destroy

  validates :name, :initials, presence: true
  validates :initials, length: { minimum: 2, maximum: 4}
  
end
