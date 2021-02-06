class CreateScores < ActiveRecord::Migration[6.0]
  def change
    create_table :scores do |t|
      t.integer :user_id
      t.integer :level
      t.integer :platforms_used
      t.integer :time_in_seconds

      t.timestamps
    end
  end
end
