class CreateDrones < ActiveRecord::Migration[5.0]
  def change
    create_table :drones do |t|
      t.text :position
      t.string :name

      t.timestamps
    end
  end
end
