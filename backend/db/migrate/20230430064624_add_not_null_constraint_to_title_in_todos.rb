class AddNotNullConstraintToTitleInTodos < ActiveRecord::Migration[7.0]
  def change
    change_column :todos, :title, :string, null: false
  end
end
