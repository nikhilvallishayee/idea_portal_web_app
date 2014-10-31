class AddIsTeamMemberToBeings < ActiveRecord::Migration
  def change
    add_column :beings, :is_team_member, :string
  end
end
