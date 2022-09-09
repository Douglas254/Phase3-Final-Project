class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/" do
    { message: "Good luck with your project!" }.to_json
  end

<<<<<<< HEAD
=======
  # Read Operation
  get '/posts' do
    posts = Post.all
    posts.to_json
  end
>>>>>>> 5601ebb (create a read operation API)

end
