module Authenticatable
  def authenticate_with_token!
    raise AuthenticationError if unauthorized?
  end

  def current_user
    token = request.headers['Authorization'].split(' ').last
    AuthenticationService.authenticate_user_with_token!(token)
  rescue AuthenticationError
    nil
  end

  def unauthorized?
    current_user.nil?
  end
end
