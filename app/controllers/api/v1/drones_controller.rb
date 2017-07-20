class DronesController < ApplicationController
  def get_drone_position
    drone = Drone.find(params[:drone_id])
    @position = drone.position
    render :json => @position
  end

  def show
  end
  
  private

  def drones_params
    params.require(:drone).permit(:drone_id, :position)
  end
end
