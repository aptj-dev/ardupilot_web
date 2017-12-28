require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module ArdupilotWeb
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.
    config.api_only = true
    config.force_ssl = true
    # config.middleware.insert_before ActionDispatch::Cookies, "Rack::SSL", exclude: ->(env) { !Rack::Request.new(env).ssl? }
    # config.ssl_options = { hsts: { preload: true, expires: 10.days } }
    # config.ssl_options = {  redirect: { status: 307, port: 81 } }
    #config.ssl_options = { hsts: { subdomains: false } }
    middleware.use ::ActionDispatch::SSL, config.ssl_options
  end
end
  
