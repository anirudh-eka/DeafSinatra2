# Solution for Challenge: Deaf Sinatra 1: Synchronous Forms. Started 2013-08-05T23:21:23+00:00
 
get '/' do
  @grandma = params[:grandma]
  @params = params
  # Look in app/views/index.erb
  erb :index
end
 
# post '/' do
#   erb :
# end
 
post '/grandma' do
  
  if params[:user_input] == '' || params[:user_input] != params[:user_input].upcase
    @grandma = "speak up sonny"
  else 
    @grandma = "word up, son-ny"
  end
  erb :_reply, :layout => false
end
