class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :description
      t.string :venue
      t.string :organizer
      t.integer :maxPlayers
      t.datetime :date

      t.timestamps
    end
  end
end
