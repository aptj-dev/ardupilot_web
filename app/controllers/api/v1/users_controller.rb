module Api::V1
  class UsersController < ApiController
    skip_before_action :authenticate_user!, only: :create
    
    #GET /v1/users
    def index
      render json: User.all
    end

    # POST /v1/users
    def create
      user = User.create!(user_params)
#      auth_token = AuthenticateUser.new(user.email, user.password).call
#      response = { message: Message.account_created, auth_token: auth_token }
      render json: user.to_json, status: :created
    end
  
    # GET /v1/users/{id}
    def show
      render json: User.find(params[:id])
    end


    private

    
    def user_params
      params.require(:user).permit(
        :name,
        :email,
        :password,
        :password_confirmation
      )
    end
  end
end
