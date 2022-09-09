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

  # Create operation 
  post '/posts' do 
    post = Post.create(
      title: params[:title],
      image: params[:image],
      short_story: params[:short_story]
    )
    post.to_json
  end

  # update operation 
  patch '/posts/:id' do
    post = Post.find(params[:id])
    post.update(
      title: params[:title],
      image: params[:image],
      short_story: params[:short_story]
    )
    post.to_json
  end

  # delete operation 
  delete '/posts/:id' do
    post = Post.find(params[:id])
    post.destroy
    post.to_json
  end

end
