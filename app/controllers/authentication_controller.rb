# app/controllers/authentication_controller.rb
class AuthenticationController < ApplicationController
  skip_before_action :authorize_request, only: :authenticate
  
  # return auth token once user is authenticated
  def authenticate
    auth_token = AuthenticateUser.new(auth_params[:email], auth_params[:password]).call
    unless auth_token.nil?
      response = { :auth_token => auth_token, :status => :ok }.to_json
#      debugger
      render json: response
    end
  end
  
  private

  def auth_params
    params.require(:authentication).permit(:email, :password)
    end
end
