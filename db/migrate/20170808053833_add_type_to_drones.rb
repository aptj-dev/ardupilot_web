class AddTypeToDrones < ActiveRecord::Migration[5.0]
  def change
    add_column :drones, :drone_type, :string
  end
end
