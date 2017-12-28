module Api::V1
  class DronesController < ApiController
    def get_drone_position
      drone = Drone.find(params[:drone_id])
      @position = drone.position
      render :json => @position
    end
    
    def show
    end

    def new
    end

    def create
      @drone = Drone.new(drone_params)
      if @drone.save
        render json: @drone, status: :created
      else
        raise
      end
    end
    
    def index
      render :json => Drone.all
    end
    
    private

    def drone_params
      params.require(:drone).permit(:drone_id, :position, :name, :drone_type)
    end
  end
end
