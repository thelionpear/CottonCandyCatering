class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name
      t.text :description
      t.integer :calories
      t.string :type
      t.integer :product_number
      t.string :image

      t.timestamps
    end
  end
end
