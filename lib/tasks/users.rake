Bundler.require(:commandline)
require "highline/import"
namespace :users do
  desc "create admin user"
  task :create_admin => [:environment] do
    email = ask("Enter admin email:  ") { |q| q.echo = true }
    name = ask("Enter Name: ") {|q| q.echo = true }
    password = ask("Enter admin password:  ") { |q| q.echo = "*" }
    password_confirmation = ask("Enter admin password (confirmation):  ") { |q| q.echo = "*" }
    user = BackendUser.new(:email => email, :display_name => name, :password => password, :roles => "admin")
    if user.save
      puts "Admin user #{email} has been created"
    else
      puts "Unable to create admin user due to following errors"
      puts *user.errors.full_messages
    end
  end
end